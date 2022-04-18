/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  introduction: [
    "home/new-to-polygon",
    {
      type: "category",
      label: "Blockchain Basics",
      items: [
        "home/blockchain-basics/blockchain",
        "home/blockchain-basics/blockchain-types",
        "home/blockchain-basics/consensus-mechanism",
        "home/blockchain-basics/ethereum",
        "home/blockchain-basics/solidity",
        "home/blockchain-basics/transactions",
        "home/blockchain-basics/gas",
        "home/blockchain-basics/accounts",
        "home/blockchain-basics/sidechain",
        "home/blockchain-basics/import-account-to-metamask",
      ],
    },
    {
      type: "category",
      label: "Polygon Basics",
      items: [
        "home/polygon-basics/what-is-polygon",
        "home/polygon-basics/what-is-proof-of-stake"
      ]
    },
    "home/architecture/polygon-architecture",
    "home/architecture/security-models",
    "home/faq",
  ],
  development: [
    "develop/getting-started",
    {
      type: "category",
      label: "Deploying on Polygon",
      items: ["develop/alchemy", "develop/quicknode", "develop/chainstack", "develop/remix", "develop/truffle", "develop/hardhat","develop/replit"],
    },
    {
      type: "category",
      label: "EIP1559 Transactions",
      items: [
        "develop/eip1559-transactions/how-to-send-eip1559-transactions",
      ],
    },
    {
      type: "category",
      label: "Network Details",
      items: [
        "develop/network-details/network",
        "develop/network-details/mapped-tokens",
        "develop/network-details/gas-token",
        "develop/network-details/genesis-contracts",
        "develop/network-details/technical-requirements",
        "develop/network-details/snapshot-instructions-heimdall-bor",
        "integrate/full-node-binaries",
        "integrate/full-node-deployment",
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        "develop/tools/polygon-faucet",
        "develop/tools/polygon-gas-station",
      ],
    },
    {
      type: "category",
      label: "Configure Polygon on Wallets",
      items: [
        {
          type: "category",
          label: "Metamask",
          items: [
            "develop/metamask/overview",
            "develop/metamask/hello",
            "develop/metamask/config-polygon-on-metamask",
            "develop/metamask/custom-tokens",
            "develop/metamask/multiple-accounts",
          ],
        },
        {
          type: "category",
          label: "Wallet Link",
          items: [
            "develop/metamask/config-polygon-on-wallet-link",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Wallets",
      items: [
        "develop/wallets/getting-started",
        {
          type: "category",
          label: "Arkane",
          items: [
            "develop/wallets/arkane/intro",
            "develop/wallets/arkane/create-wallet",
            "develop/wallets/arkane/network",
            "develop/wallets/arkane/custom-tokens",
            "develop/wallets/arkane/support",
          ],
        },
        "develop/wallets/fortmatic",
        "develop/wallets/metamask",
        "develop/wallets/portis",
        "develop/wallets/walletconnect",
        {
          type: "category",
          label: "Web3Auth",
          items: [
            "develop/wallets/web3auth/introduction",
            "develop/wallets/web3auth/getstarted",
            "develop/wallets/web3auth/customauth",
            "develop/wallets/web3auth/web3auth-and-wallets",
            "develop/wallets/web3auth/torus",
          ],
        },
        {
          type: "category",
          label: "Polygon Web Wallet",
          items: [
            "develop/wallets/polygon-web-wallet/web-wallet-v2-guide",
            "develop/wallets/polygon-web-wallet/deposit-eth-dai-on-polygon",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Ethereum ↔ Polygon",
      items: [
        "develop/ethereum-polygon/getting-started",
        {
          type: "category",
          label: "Matic.js",
          items: ["develop/ethereum-polygon/matic-js/get-started",
                  "develop/ethereum-polygon/matic-js/installation",
                  {
                    type: "category",
                    label: "Setup",
                    items: ["develop/ethereum-polygon/matic-js/setup/index",
                            "develop/ethereum-polygon/matic-js/setup/web3",
                            "develop/ethereum-polygon/matic-js/setup/ethers"]
                  },
                  "develop/ethereum-polygon/matic-js/api-architecture",
                  {
                    type: "category",
                    label: "POS",
                    items: [ "develop/ethereum-polygon/matic-js/pos/index",
                            {
                              type: "category",
                              label: "ERC20",
                              items: ["develop/ethereum-polygon/matic-js/pos/erc20/index", 
                                      "develop/ethereum-polygon/matic-js/pos/erc20/get-balance",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/approve",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/approve-max",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/get-allowance",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/deposit",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/transfer",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-start",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit-faster",
                                      "develop/ethereum-polygon/matic-js/pos/erc20/is-withdraw-exited"
                                      ]
                            },
                            {
                              type: "category",
                              label: "ERC721",
                              items: ["develop/ethereum-polygon/matic-js/pos/erc721/index", 
                                      "develop/ethereum-polygon/matic-js/pos/erc721/get-tokens-count",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/get-token-id-at-index-for-user",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/get-all-tokens",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/is-approved",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/approve",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/approve-all",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/deposit",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/deposit-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/transfer",
                                      "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-with-meta-data"
                                      ]
                              },
                            {
                              type: "category",
                              label: "ERC1155",
                              items: ["develop/ethereum-polygon/matic-js/pos/erc1155/get-balance",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all-for-mintable",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/is-approved-all",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/deposit",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/deposit-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited-many",
                                      "develop/ethereum-polygon/matic-js/pos/erc1155/transfer"
                                    ]
                            },
                            "develop/ethereum-polygon/matic-js/pos/is-check-pointed",
                            "develop/ethereum-polygon/matic-js/pos/is-deposited",
                            "develop/ethereum-polygon/matic-js/pos/deposit-ether"
                          ]
                  },
                  {
                    type: "category",
                    label: "Plasma",
                    items: [{
                              type: "category",
                              label: "ERC20",
                              items: ["develop/ethereum-polygon/matic-js/plasma/erc20/index", 
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/get-balance",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/approve",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/approve-max",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/get-allowance",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/deposit",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/transfer",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-start",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-confirm",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-confirm-faster",
                                      "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-exit"
                                      ]
                            },
                            {
                              type: "category",
                              label: "ERC721",
                              items: ["develop/ethereum-polygon/matic-js/plasma/erc721/index", 
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/get-tokens-count",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/get-token-id-at-index-for-user",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/get-all-tokens",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/safe-deposit",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-start",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-confirm",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-confirm-faster",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-exit",
                                      "develop/ethereum-polygon/matic-js/plasma/erc721/transfer"
                                      ]
                            },
                            "develop/ethereum-polygon/matic-js/plasma/is-deposited",
                            "develop/ethereum-polygon/matic-js/plasma/is-check-pointed",
                            "develop/ethereum-polygon/matic-js/plasma/withdraw-exit",
                            "develop/ethereum-polygon/matic-js/plasma/deposit-ether"
                    ]
                  },
                  "develop/ethereum-polygon/matic-js/fx-portal",
                  "develop/ethereum-polygon/matic-js/set-proof-api",
                  {
                    type: "category",
                    label: "Advanced",
                    items: ["develop/ethereum-polygon/matic-js/advanced/abi-manager",
                            "develop/ethereum-polygon/matic-js/advanced/plugin",
                            "develop/ethereum-polygon/matic-js/advanced/exit-util"]
                  }]
        },
        {
          type: "category",
          label: "PoS Bridge",
          items: [
            "develop/ethereum-polygon/pos/getting-started",
            {
              type: "category",
              label: "Using Polygon Edge",
              items: [
                "develop/ethereum-polygon/pos/using-sdk/getting-started",
                "develop/ethereum-polygon/pos/using-sdk/eth",
                "develop/ethereum-polygon/pos/using-sdk/erc20",
                "develop/ethereum-polygon/pos/using-sdk/erc721",
                "develop/ethereum-polygon/pos/using-sdk/erc1155",
              ],
            },
            {
              type: "category",
              label: "Calling Contracts",
              items: [
                "develop/ethereum-polygon/pos/calling-contracts/ether",
                "develop/ethereum-polygon/pos/calling-contracts/erc20",
                "develop/ethereum-polygon/pos/calling-contracts/erc721",
                "develop/ethereum-polygon/pos/calling-contracts/erc1155",
              ],
            },
            "develop/ethereum-polygon/pos/deposit-withdraw-event-pos",
            "develop/ethereum-polygon/pos/deployment",
            "develop/ethereum-polygon/pos/mapping-assets",
          ],
        },
        {
          type: "category",
          label: "Plasma Bridge",
          items: [
            "develop/ethereum-polygon/plasma/getting-started",
            "develop/ethereum-polygon/plasma/eth",
            "develop/ethereum-polygon/plasma/erc20",
            "develop/ethereum-polygon/plasma/erc721",
            "develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma",
            "develop/ethereum-polygon/plasma/mapping-assets",
          ],
        },
        {
          type: "category",
          label:"Tools",
          items: ["develop/ethereum-polygon/tools/widget"],
        },
        "develop/ethereum-polygon/submit-mapping-request",
        "develop/ethereum-polygon/mintable-assets",
      ],
    },
    {
      type: "category",
      label: "L1 ↔ L2 Communication",
      items: [
        "develop/l1-l2-communication/state-transfer",
        "develop/l1-l2-communication/fx-portal",
      ],
    },
    {
      type: "category",
      label: "Meta Transactions",
      items: [
        "develop/metatransactions/getting-started",
        "develop/metatransactions/metatransactions-biconomy",
        "develop/metatransactions/metatransactions-gsn",
        "develop/metatransactions/network-agnostics",
      ],
    },
    {
      type: "category",
      label: "IPFS - Filecoin",
      items: [
        "develop/ipfs",
        "develop/filecoinhelpers",
        "develop/nftstorage",

      ],
    },
    {
      type: "category",
      label: "Oracles",
      items: [
        "develop/oracles/getting-started",
        "develop/oracles/optimisticoracle",
        "develop/oracles/chainlink",
        "develop/oracles/razor",
        "develop/oracles/bandchain",
        "develop/oracles/bandstandarddataset",
        "develop/oracles/tellor",
      ],
    },
    "develop/fiat-on-ramp",
    {
      type: "category",
      label: "Indexing Services",
      items: [
        "develop/graph",
        {
          type: "link",
          label: "Covalent",
          href: "https://www.covalenthq.com/docs/api/",
        },
      ],
    },


    {
      type: "category",
      label: "Tutorials",
      items: ["develop/pos-using-metamask", "develop/plasma-using-metamask", "develop/nft-tutorial"],
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        "develop/advanced/calling-plasma-contracts",
        "develop/advanced/swap-assets",
        "develop/advanced/custom-restrictions",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/polygon-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          items: [
            "contribute/state-sync/state-sync",
            "contribute/state-sync/how-state-sync-works",
          ],
        },
        "home/architecture/security-models",
      ],
    },
    {
      type: "category",
      label: "CEXs, Wallets & Fiat-on-ramps",
      items: [
        "develop/cexs-wallets/fiat-ramps",
        "develop/cexs-wallets/cexs",
        "develop/cexs-wallets/wallets",
      ],

    },
    {
      type: "category",
      label: "DID Implementation",
      items: ["develop/did-implementation/introduction","develop/did-implementation/getting-started"]
    },
  ],
  Integrate: [
    "integrate/quickstart",
    {
      type: "category",
      label: "Network Information",
      items: [
        "integrate/network",
        {
          type: "category",
          label: "Network Details",
          items: [
            "integrate/network-detail",
            {
              type: "link",
              label: "Polygon-Mainnet",
              href: "https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json",
            },
            {
              type: "link",
              label: "Mumbai",
              href: "https://static.matic.network/network/testnet/mumbai/index.json",
            },
          ],
        },
        {
          type: "link",
          label: "Polygon Faucet",
          href: "https://faucet.polygon.technology/",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      items: [
          "develop/network-details/technical-requirements",
          "integrate/full-node-deployment",
          "integrate/full-node-binaries"
        ],
    },
  ],
  Validate: [
    {
      type: "category",
      label: "Overview",
      items: [
        "validate/validator/introduction",
        "validate/validator/architecture",
        {
          type: "category",
          label: "Core Components",
          items: [
            "validate/validator/core-components/heimdall-chain",
            "validate/validator/core-components/bor-chain",
            "validate/validator/core-components/checkpoint-mechanism",
            "validate/validator/core-components/proposer-producer-selection",
            "validate/validator/core-components/key-management",
            // "validate/validator/bridge",
            "validate/validator/core-components/staking",
            "validate/validator/core-components/derivatives",
            "validate/validator/core-components/proposer-bonus",
            "validate/validator/core-components/transaction-fees",
            "validate/validator/core-components/state-sync-mechanism",
          ],
        },
      ],
    },
    //"validate/delegator-faq",
    // "validate/port_management",
    {
      type: "category",
      label: "Validate",
      items: [
        "validate/validate/getting-started",
        "validate/validate/core-components",
        "validate/validate/validator-responsibilities",
        "validate/validate/validator-node-system-requirements",
        "validate/validate/run-validator-ansible",
        "validate/validate/run-validator-binaries",
        "validate/validate/install-gcp",
        "validate/validate/validator-staking-operations",
        "validate/validate/replace-validator",
        "validate/validate/change-signer-address",
        "validate/validate/validator-commission-operations",
      ],
    },
    {
      type: "category",
      label: "Delegate",
      items: ["validate/polygon-basics/who-is-delegator",
              "validate/delegate"
      ],
    },
    {
      type: "category",
      label: "Knowledge Base",
      items: ["validate/knowledge-base/known-issues","validate/knowledge-base/how-to",]
    },
    //"validate/general-faq",
    "validate/bug-bounty-program",
    "validate/reporting-issues",
    "validate/rewards",
    "validate/validator-faq",
    "validate/glossary",
  ],
  Contributors: [
    "contribute/orientation",
    "contribute/community-maintainers",
    "validate/bug-bounty-program",
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/polygon-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          items: [
            "contribute/state-sync/state-sync",
            "contribute/state-sync/how-state-sync-works",
          ],
        },

        "home/architecture/security-models",
      ],
    },
  ],
  faq: [
    "faq/general-faq",
    "faq/technical-faqs",
    // "faq/delegator-faq",
    "faq/commit-chain-multisigs",
    "faq/staking-faq",
    "faq/validator-faq",
    // "faq/staking-tutorials",
    {
      type: "category",
      label: "Wallet FAQs",
      items: [
    "faq/wallet-bridge-faq",
    "faq/adding-a-custom-token",
          ],
        },
    "faq/consensys-framework",
    "faq/widget-faq",
    "faq/wallet-list",
  ],
};
