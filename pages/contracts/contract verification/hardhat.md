import { Callout } from 'nextra/components'

# Verifying a Smart Contract on Apechain

## Introduction
Verifying a smart contract on the blockchain is crucial for ensuring its transparency, security, and facilitating interaction for both users and developers. Hardhat is a versatile tool designed for compiling, testing, deploying, and verifying smart contracts.

This guide will walk you through the process of verifying your smart contract on the Curtis Network (testnet) using Hardhat.

## Prerequisites
Before you begin the verification process, make sure you have the following:

- **Hardhat Installed**: This is essential for compiling, deploying, and verifying your smart contract.
- **Node.js and NPM**: Hardhat operates on Node.js, and NPM (Node Package Manager) is used to install necessary packages.
- **Deployed Smart Contract**: Ensure your smart contract is already deployed on the Curtis network. If it isn't, refer to the guide on Deploying a Smart Contract.

## Step 1: Installing Hardhat Verify Package
To enable verification in your Hardhat environment, you need to install the `@nomicfoundation/hardhat-verify` plugin. Run the following command in your project's root directory:

```bash
npm install --save-dev @nomicfoundation/hardhat-verify
```

## Step 2: Configuring Hardhat
After installing the verification plugin, the next step is to configure your Hardhat environment. This involves enabling the necessary plugins and setting up your network details in the ```hardhat.config.ts``` file.

<Callout type="warning">For this example we are adding the private key and api key in the file, **PLEASE** make adjustments and add this sensitive information to a .env file if pushing to a repository </Callout>

Include the following configuration in your ```hardhat.config.ts```:

```js {11, 22}
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-verify";
import type { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    ApeChain: {
      url: "https://apechain.calderachain.xyz/http",
      accounts: [
        "YOUR_PRIVATE_KEY",
      ],
    },
    curtis: {
      url: "https://curtis.rpc.caldera.xyz/http",
      accounts: [
        "YOUR_PRIVATE_KEY",
      ],
    }
  },
  sourcify: {
    enabled: false,
    apiUrl: "https://sourcify.dev/server",
    browserUrl: "https://repo.sourcify.dev",
  },
  etherscan: {
    apiKey: {
      curtis: "YOUR_ETHERSCAN_API_KEY",
    },
    customChains: [
    {
        network: "ApeChain",
        chainId: 33139,
        urls: {
          apiURL: "https://apechain.calderachain.xyz/http",
          browserURL: "https://apechain.calderachain.xyz/http",
        },
      },
      {
        network: "curtis",
        chainId: 33111,
        urls: {
          apiURL: "https://curtis.explorer.caldera.xyz/api",
          browserURL: "https://curtis.explorer.caldera.xyz/",
        },
      },
    ],
  },
};

export default config;
```

## Step 3: Verifying Your Contract

Once your project is configured for verification, you can proceed to verify your smart contract on Apechain Mainnet or Testnet. Replace `<contract-address>` with the actual address of your deployed contract.

### For Mainnet

For verification on the Curtis network, run the following command:

```bash
npx hardhat verify --network ApeChain <contract-address>
```

This command will communicate with the Apechain network (as specified in your Hardhat configuration) to submit your contract’s source code and metadata for verification. Once successfully verified, your contract’s source code will be publicly accessible on the blockchain, linked to its on-chain address.

### For Testnet

For verification on the Curtis network, run the following command:

```bash
npx hardhat verify --network curtis <contract-address>
```

This command will communicate with the Curtis network (as specified in your Hardhat configuration) to submit your contract’s source code and metadata for verification. Once successfully verified, your contract’s source code will be publicly accessible on the blockchain, linked to its on-chain address.


## Conclusion
Verifying your smart contract not only strengthens your project's transparency and credibility but also greatly enhances the user experience by making interactions and verifications more straightforward. By following the steps in this guide, developers can ensure their contracts are verified and available for public scrutiny, contributing to a more secure and trustworthy ecosystem.