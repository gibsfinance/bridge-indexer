import {
  decodeFunctionData,
  getAddress,
  type Hex,
  keccak256,
  numberToHex,
  parseAbi,
  zeroAddress,
} from 'viem'
import ERC677 from '../abis/ERC677'
import BasicOmnibridge from '../abis/BasicOmnibridge'

function strip0x(input: string) {
  return input.replace(/^0x/, '')
}

/**
 * Decodes the datatype byte from the AMB message.
 * First (the most significant bit) denotes if the message should be forwarded to the manual lane.
 * @param dataType: datatype of the received AMB message.
 */
const decodeAMBDataType = (dataType: number) => ({
  manualLane: (dataType & 128) === 128,
})

export function signatureToVRS(rawSignature: string) {
  const signature = strip0x(rawSignature)
  const word = 32
  const word2 = word * 2
  const word4 = word2 * 2
  const r = signature.slice(0, word2)
  const s = signature.slice(word2, word4)
  const v = signature.slice(word4)
  return { v, r, s }
}

export function packSignatures(array: ReturnType<typeof signatureToVRS>[]) {
  const length = strip0x(numberToHex(array.length))
  const msgLength = length.length === 1 ? `0${length}` : length
  let v = ''
  let r = ''
  let s = ''
  array.forEach((e) => {
    v = v.concat(e.v)
    r = r.concat(e.r)
    s = s.concat(e.s)
  })
  return `0x${msgLength}${v}${r}${s}`
}

export const parseAMBMessage = (msg: Hex) => {
  const message = strip0x(msg)
  const messageId = `0x${message.slice(0, 64)}`
  const sender = `0x${message.slice(64, 104)}`
  const executor = `0x${message.slice(104, 144)}`
  const gaslimit = `0x${message.slice(144, 152)}`
  const originationChainIdLength = Number(`0x${message.slice(152, 154)}`) * 2
  const destinationChainIdLength = Number(`0x${message.slice(154, 156)}`) * 2
  const dataType = parseInt(message.slice(156, 158), 16)
  const originationChainIdOffset = 158
  const destinationChainIdOffset =
    originationChainIdOffset + originationChainIdLength
  const calldataStart = destinationChainIdOffset + destinationChainIdLength
  const originationChainId = BigInt(
    `0x${message.slice(originationChainIdOffset, destinationChainIdOffset)}`,
  )
  const destinationChainId = BigInt(
    `0x${message.slice(destinationChainIdOffset, calldataStart)}`,
  )
  const bridgeCalldata = `0x${message.slice(calldataStart)}` as Hex
  const bridgeSigHash = bridgeCalldata.slice(0, 10)
  const messageHash = keccak256(msg)

  const nestedData = {
    token: zeroAddress as Hex,
    router: zeroAddress as Hex,
    amount: 0n as bigint,
    calldata: '0x' as Hex,
  }
  let from = zeroAddress as Hex
  let to = zeroAddress as Hex
  const handleNativeTokensAndCall = bridgeSigHash === '0x867f7a4d'
  const handleBridgedTokensAndCall = bridgeSigHash === '0xc5345761'
  if (handleNativeTokensAndCall || handleBridgedTokensAndCall) {
    // const method = handleNativeTokensAndCall
    //   ? 'handleNativeTokensAndCall'
    //   : 'handleBridgedTokensAndCall'
    // const bridge = await hre.ethers.getContractAt('IBasicOmnibridge', ethers.ZeroAddress) as unknown as IBasicOmnibridge
    const {
      functionName,
      args: [token, router, amount, calldata],
    } = decodeFunctionData({
      abi: BasicOmnibridge,
      data: bridgeCalldata,
      // functionName: method,
    })
    if (functionName === 'handleNativeTokensAndCall') {
      nestedData.token = token as Hex
      nestedData.router = router as Hex
      to = nestedData.router
      nestedData.amount = BigInt(amount)
      nestedData.calldata = calldata as Hex
    } else if (functionName === 'handleBridgedTokensAndCall') {
      nestedData.token = token as Hex
      nestedData.router = router as Hex
      to = nestedData.router
      nestedData.amount = BigInt(amount)
      nestedData.calldata = calldata as Hex
    }
  } else if (
    bridgeSigHash === '0xd522cfd7' /* deployAndHandleBridgedTokensAndCall */
  ) {
    const {
      functionName,
      args: [token, _name, _symbol, _decimals, router, amount, calldata],
    } = decodeFunctionData({
      abi: BasicOmnibridge,
      data: bridgeCalldata,
    })
    if (functionName !== 'deployAndHandleBridgedTokensAndCall') {
      throw new Error('Invalid function')
    }
    nestedData.token = token as Hex
    nestedData.router = router as Hex
    to = nestedData.router
    nestedData.amount = BigInt(amount as bigint)
    nestedData.calldata = calldata as Hex
  } else if (bridgeSigHash === '0x2ae87cdd') {
    // console.log(bridgeCalldata)
    const {
      functionName,
      args: [token, _name, _symbol, _decimals, router, amount],
    } = decodeFunctionData({
      abi: parseAbi([
        'function deployAndHandleBridgedTokens(address,string,string,uint8,address,uint256)',
      ]),
      data: bridgeCalldata,
    })
    if (functionName !== 'deployAndHandleBridgedTokens') {
      throw new Error('Invalid function')
    }
    nestedData.token = token as Hex
    nestedData.router = router as Hex
    to = nestedData.router
    nestedData.amount = BigInt(amount as bigint)
    // const parsed = parseAMBMessage(bridgeCalldata)
    // from = parsed.sender
    // const {} = parse
    // throw new Error('Invalid bridgeSigHash')
  }
  // else if (bridgeSigHash === '0x4000aea0' /* transferAndCall */) {
  //   const {
  //     functionName,
  //     args: [sender, amount, bytes],
  //   } = decodeFunctionData({
  //     abi: ERC677,
  //     data: bridgeCalldata,
  //   })
  //   if (functionName !== 'transferAndCall') {
  //     throw new Error('Invalid function')
  //   }
  //   nestedData.router = to as Hex
  //   to = nestedData.router
  //   nestedData.amount = BigInt(amount as bigint)
  //   nestedData.calldata = bytes as Hex
  // }

  return {
    messageHash,
    sender: getAddress(sender),
    executor: getAddress(executor),
    messageId,
    dataType,
    gaslimit,
    decodedDataType: decodeAMBDataType(dataType),
    originationChainId,
    destinationChainId,
    bridgeCalldata,
    bridgeSigHash,
    nestedData,
    from,
    to,
  } as const
}

export type ParseAMBMessageResult = Awaited<ReturnType<typeof parseAMBMessage>>
