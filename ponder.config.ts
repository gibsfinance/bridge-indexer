import { createConfig, loadBalance, rateLimit } from '@ponder/core'
import { createPublicClient, getContract, http, webSocket } from 'viem'
import HomeAMBAbi from './abis/HomeAMB'
import ForeignAMBAbi from './abis/ForeignAMB'
import { TokenOmnibridgeAbi } from './abis/TokenOmnibridge'
import BaseBridgeValidatorsAbi from './abis/BaseBridgeValidators'
import {
  type ChainId,
  type Provider,
  chains,
  pathways,
  Side,
  getValidatorContract,
  Providers,
} from './src/utils'

Error.stackTraceLimit = Infinity

const gatherTransportList = (chainId: ChainId) => {
  let index = 0
  const list = []
  if (process.env[`PONDER_RPC_URL_${chainId}`]) {
    list.push(process.env[`PONDER_RPC_URL_${chainId}`]!)
  }
  while (process.env[`PONDER_RPC_URL_${chainId}_${index}`]) {
    list.push(process.env[`PONDER_RPC_URL_${chainId}_${index}`]!)
    index++
  }
  return list
}

const toTransport = (chainId: ChainId) => {
  const list = gatherTransportList(chainId)
  const backup = (a: any) => a
  const rateLimitSettings = {
    browser: false,
    requestsPerSecond: 100,
  }
  return loadBalance(
    list.map((url) => {
      const wrapper =
        url.includes('publicnode') || url.includes('pulsechain')
          ? rateLimit
          : backup
      return wrapper(
        url.startsWith('http')
          ? http(url)
          : webSocket(url, {
              reconnect: true,
              keepAlive: true,
              timeout: 4_000,
              retryCount: 10,
              retryDelay: 100,
            }),
        rateLimitSettings,
      )
    }),
  )
}

const getValidatorAddress = (
  provider: Provider,
  from: ChainId,
  to: ChainId,
  side: Side,
) => {
  const client = createPublicClient({
    transport: toTransport(side === 'home' ? from : to),
  })
  return getValidatorContract(provider, from, to, side, client)
}

export default createConfig({
  database: {
    kind: 'postgres',
    connectionString: process.env.DATABASE_URL,
    poolConfig: {
      max: 100,
    },
  },
  networks: {
    ethereum: {
      chainId: chains.ethereum,
      transport: toTransport(chains.ethereum),
      pollingInterval: 6_000,
      maxRequestsPerSecond: 1_000,
    },
    bsc: {
      chainId: chains.bsc,
      transport: toTransport(chains.bsc),
      pollingInterval: 3_000,
      maxRequestsPerSecond: 1_000,
    },
    pulsechain: {
      chainId: chains.pulsechain,
      transport: toTransport(chains.pulsechain),
      pollingInterval: 5_000,
      maxRequestsPerSecond: 1_000,
    },
    pulsechainV4: {
      chainId: chains.pulsechainV4,
      transport: toTransport(chains.pulsechainV4),
      pollingInterval: 5_000,
      maxRequestsPerSecond: 1_000,
    },
    sepolia: {
      chainId: chains.sepolia,
      transport: toTransport(chains.sepolia),
      pollingInterval: 6_000,
      maxRequestsPerSecond: 1_000,
    },
  },
  contracts: {
    TokenOmnibridge: {
      abi: TokenOmnibridgeAbi,
      network: {
        ethereum: {
          address: [
            // add in all token bridges ever encountered
          ],
        },
        pulsechain: {
          address: [
            //
          ],
        },
        pulsechainV4: {
          address: [
            //
          ],
        },
        sepolia: {
          address: [
            //
          ],
        },
        bsc: {
          address: [
            //
          ],
        },
      },
    },
    ValidatorContract: {
      abi: BaseBridgeValidatorsAbi,
      network: {
        pulsechain: {
          address: [
            await getValidatorAddress(
              Providers.PULSECHAIN,
              chains.pulsechain,
              chains.ethereum,
              'home',
            ),
            await getValidatorAddress(
              Providers.TOKENSEX,
              chains.pulsechain,
              chains.bsc,
              'home',
            ),
          ],
          startBlock: 17_268_297,
        },
        ethereum: {
          address: [
            await getValidatorAddress(
              Providers.PULSECHAIN,
              chains.pulsechain,
              chains.ethereum,
              'foreign',
            ),
          ],
          startBlock: 17_264_119,
        },
        pulsechainV4: {
          address: [
            await getValidatorAddress(
              Providers.PULSECHAIN,
              chains.pulsechainV4,
              chains.sepolia,
              'home',
            ),
          ],
          startBlock: 16_564_223,
        },
        sepolia: {
          address: [
            await getValidatorAddress(
              Providers.PULSECHAIN,
              chains.pulsechainV4,
              chains.sepolia,
              'foreign',
            ),
          ],
          startBlock: 3_331_893,
        },
        bsc: {
          address: [
            await getValidatorAddress(
              Providers.TOKENSEX,
              chains.pulsechain,
              chains.bsc,
              'foreign',
            ),
          ],
          startBlock: 28_987_322,
        },
      },
    },
    HomeAMB: {
      abi: HomeAMBAbi,
      filter: {
        event: [
          'UserRequestForSignature', // home -> foreign start
          'SignedForAffirmation', // foreign -> home signed
          'SignedForUserRequest', // home -> foreign signed
          'AffirmationCompleted', // foreign -> home complete
        ],
      },
      network: {
        pulsechain: {
          address: [
            pathways.pulsechain[chains.pulsechain]![chains.ethereum]!.home,
            pathways.tokensex[chains.pulsechain]![chains.bsc]!.home,
          ],
          // bsc is deployed at 17_494_240
          startBlock: 17_268_302,
        },
        pulsechainV4: {
          address: [
            pathways.pulsechain[chains.pulsechainV4]![chains.sepolia]!.home,
          ],
          startBlock: 16_564_237,
        },
      },
    },
    ForeignAMB: {
      filter: {
        event: [
          'UserRequestForAffirmation', // foreign -> home start
          'RelayedMessage', // home -> foreign complete
        ],
      },
      abi: ForeignAMBAbi,
      network: {
        ethereum: {
          address: [
            pathways.pulsechain[chains.pulsechain]![chains.ethereum]!.foreign,
          ],
          startBlock: 17_264_119,
        },
        bsc: {
          address: [pathways.tokensex[chains.pulsechain]![chains.bsc]!.foreign],
          startBlock: 28_987_322,
        },
        sepolia: {
          address: [
            pathways.pulsechain[chains.pulsechainV4]![chains.sepolia]!.foreign,
          ],
          startBlock: 3_331_901,
        },
      },
    },
  },
})
