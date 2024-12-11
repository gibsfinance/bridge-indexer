import { createConfig } from "ponder";
import HomeAMBAbi from "./abis/HomeAMB";
import ForeignAMBAbi from "./abis/ForeignAMB";
import { TokenOmnibridgeAbi } from "./abis/TokenOmnibridge";
import BaseBridgeValidatorsAbi from "./abis/BaseBridgeValidators";
import {
  chains,
  pathways,
  Providers,
  getValidatorAddress,
  toTransport,
} from "./src/utils";

Error.stackTraceLimit = Infinity;

export default createConfig({
  database: {
    kind: "postgres",
    connectionString: process.env.DATABASE_URL,
  },
  networks: {
    ethereum: {
      chainId: chains.ethereum,
      transport: toTransport(chains.ethereum),
      pollingInterval: 5_000,
      maxRequestsPerSecond: 1_000,
    },
    // bsc: {
    //   chainId: chains.bsc,
    //   transport: toTransport(chains.bsc),
    //   pollingInterval: 5_000,
    //   maxRequestsPerSecond: 1_000,
    // },
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
      pollingInterval: 5_000,
      maxRequestsPerSecond: 1_000,
    },
  },
  contracts: {
    // TokenOmnibridge: {
    //   abi: TokenOmnibridgeAbi,
    //   network: {
    //     ethereum: {
    //       address: [
    //         // add in all token bridges ever encountered
    //       ],
    //     },
    //     pulsechain: {
    //       address: [
    //         //
    //       ],
    //     },
    //     pulsechainV4: {
    //       address: [
    //         //
    //       ],
    //     },
    //     sepolia: {
    //       address: [
    //         //
    //       ],
    //     },
    //     // bsc: {
    //     //   address: [
    //     //     //
    //     //   ],
    //     // },
    //   },
    // },
    ValidatorContract: {
      abi: BaseBridgeValidatorsAbi,
      network: {
        pulsechain: {
          address: [
            await getValidatorAddress(
              Providers.PULSECHAIN,
              chains.pulsechain,
              chains.ethereum,
              "home"
            ),
            // await getValidatorAddress(
            //   Providers.TOKENSEX,
            //   chains.pulsechain,
            //   chains.bsc,
            //   'home',
            // ),
          ],
          startBlock: 17_268_297,
        },
        ethereum: {
          address: [
            await getValidatorAddress(
              Providers.PULSECHAIN,
              chains.pulsechain,
              chains.ethereum,
              "foreign"
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
              "home"
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
              "foreign"
            ),
          ],
          startBlock: 3_331_893,
        },
        // bsc: {
        //   address: [
        //     await getValidatorAddress(
        //       Providers.TOKENSEX,
        //       chains.pulsechain,
        //       chains.bsc,
        //       'foreign',
        //     ),
        //   ],
        //   startBlock: 28_987_322,
        // },
      },
    },
    HomeAMB: {
      abi: HomeAMBAbi,
      filter: {
        event: [
          "UserRequestForSignature", // home -> foreign start
          "SignedForAffirmation", // foreign -> home signed
          "SignedForUserRequest", // home -> foreign signed
          "AffirmationCompleted", // foreign -> home complete
        ],
      },
      network: {
        pulsechain: {
          address: [
            pathways.pulsechain[chains.pulsechain]![chains.ethereum]!.home,
            // pathways.tokensex[chains.pulsechain]![chains.bsc]!.home,
          ],
          // bsc is deployed at 17_494_240
          // startBlock: 20427991,
          startBlock: 17_268_302,
        },
        pulsechainV4: {
          address: [
            pathways.pulsechain[chains.pulsechainV4]![chains.sepolia]!.home,
          ],
          // startBlock: 19836620,
          startBlock: 16_564_237,
        },
      },
    },
    ForeignAMB: {
      filter: {
        event: [
          "UserRequestForAffirmation", // foreign -> home start
          "RelayedMessage", // home -> foreign complete
        ],
      },
      abi: ForeignAMBAbi,
      network: {
        ethereum: {
          address: [
            pathways.pulsechain[chains.pulsechain]![chains.ethereum]!.foreign,
          ],
          // startBlock: 19920476,
          startBlock: 17_264_119,
        },
        // bsc: {
        //   address: [pathways.tokensex[chains.pulsechain]![chains.bsc]!.foreign],
        //   // startBlock: 39182556,
        //   startBlock: 28_987_322,
        // },
        sepolia: {
          address: [
            pathways.pulsechain[chains.pulsechainV4]![chains.sepolia]!.foreign,
          ],
          // startBlock: 7019369,
          startBlock: 3_331_901,
        },
      },
    },
  },
});
