# Hardhat
## What is Hardhat?

Hardhat is a development environment for Ethereum that helps developers manage and automate the common tasks involved in building smart contracts and decentralized applications. It can directly interact with Caldera's Ethereum API, allowing for the deployment of smart contracts into the Caldera network.

Additionally, Hardhat is a comprehensive set of tools for creating Ethereum-based software, which includes various components that aid in editing, compiling, debugging, and deploying smart contracts and decentralized applications. All of these components work together to create a complete development environment.

In this guide we will see how you can build a token wallet dApp using Hardhat and Apechain.

### Prerequisites

- **Basic Knowledge:**
    - **Solidity**: For writing smart contracts.
    - **JavaScript/React**: For scripting and frontend development.
- **Development Environment:**
    - **Node.js** and **npm/yarn**: Installed from [Node.js](https://nodejs.org/).
- **Hardhat**: Development environment for Ethereum.
    - Install with:
        
        ```bash
        npm install --save-dev hardhat
        ```
        
- **Metamask**: Crypto wallet browser extension from [Metamask](https://metamask.io/).
- **Ethers.js**: Library to interact with Ethereum.
    - Install with:
        
        ```bash
        npm install ethers
        ```
        
- **OpenZeppelin Contracts**: Secure smart contract library.
    - Install with:
        
        ```bash
        npm install @openzeppelin/contracts
        ```
        

## Step-by-Step Guide

Before we move ahead with the guide, here’s an example of how the folder structure would look like:

```markdown
token-wallet/
├── contracts/
│   └── Token.sol
├── scripts/
│   └── deploy.js
├── test/
├── hardhat.config.js
├── package.json
└── frontend/
├── src/
│   ├── components/
│   │   └── TokenWallet.js
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
```

### Step-by-Step Guide

```bash
npm start
```

### Step 1: Set Up Hardhat Project

1. **Initialize a new Hardhat project:**
    
    ```bash
    mkdir token-wallet
    cd token-wallet
    npm init -y
    npm install --save-dev hardhat
    npx hardhat
    ```
    
2. **Install necessary dependencies:**
    
    ```bash
    npm install @openzeppelin/contracts ethers hardhat-ethers
    ```
    

### Step 2: Write the Token Contract

1. **Create `Token.sol` in the `contracts` directory:**
This Solidity file defines an ERC20 token named "MyToken" with the symbol "MTK" and an initial supply minted to the deployer's address.
    
    ```solidity
    
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;
    
    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
    
    contract Token is ERC20 {
        constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
            _mint(msg.sender, initialSupply);
        }
    }
    ```
    

### Step 3: Write Deployment Script

1. **Create `deploy.js` in the `scripts` directory:**
This script deploys the `Token` contract to the blockchain, minting 1,000,000 tokens initially.
    
    ```jsx
    async function main() {
        const [deployer] = await ethers.getSigners();
        console.log("Deploying contracts with the account:", deployer.address);
    
        const Token = await ethers.getContractFactory("Token");
        const token = await Token.deploy(1000000);
    
        console.log("Token deployed to:", token.address);
    }
    
    main()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error);
        process.exit(1);
      });
    
    ```
    

### Step 4: Configure Hardhat for Apechain

1. **Modify `hardhat.config.js` to include necessary plugins and configurations:**
    
    Replace `YOUR_PRIVATE_KEY` with your actual private key for deploying the contract.
    
    ```jsx
    javascriptCopy code
    require("@nomiclabs/hardhat-waffle");
    require("@nomiclabs/hardhat-ethers");
    
    module.exports = {
        solidity: "0.8.0",
        networks: {
            apechain: {
                url: "https://rpc.apechain.network",
                accounts: ["YOUR_PRIVATE_KEY"]
            }
        }
    };
    ```
    

### Step 5: Compile and Deploy

1. **Compile the contract:**
    
    ```bash
    npx hardhat compile
    ```
    
2. **Deploy the contract to Apechain:**
    
    ```bash
    npx hardhat run scripts/deploy.js --network apechain
    ```
    
    Note the deployed contract address, which will be used in the frontend.
    

### Step 6: Set Up Frontend with React

1. **Initialize a new React project:**
    
    ```bash
    npx create-react-app frontend
    cd frontend
    npm install ethers
    ```
    
2. **Create necessary files and directories:**
    
    `frontend/src/components/TokenWallet.js`
    This component allows users to connect their MetaMask wallet and check their token balance.
    
    ```jsx
    import React, { useState } from 'react';
    import { ethers } from 'ethers';
    import Token from '../artifacts/contracts/Token.sol/Token.json';
    
    const tokenAddress = "DEPLOYED_CONTRACT_ADDRESS";
    
    function TokenWallet() {
        const [balance, setBalance] = useState(0);
        const [userAddress, setUserAddress] = useState("");
    
        async function requestAccount() {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        }
    
        async function getBalance() {
            if (typeof window.ethereum !== 'undefined') {
                const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setUserAddress(account);
    
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
                const balance = await contract.balanceOf(account);
                setBalance(balance.toString());
            }
        }
    
        return (
            <div>
                <h1>Token Wallet</h1>
                <button onClick={getBalance}>Get Balance</button>
                <p>Account: {userAddress}</p>
                <p>Balance: {balance}</p>
            </div>
        );
    }
    
    export default TokenWallet;
    ```
    
3. **Update `App.js`:**
    
    This is the main entry point of your React app that renders the `TokenWallet` component.
    
    ```jsx
    import React from 'react';
    import TokenWallet from './components/TokenWallet';
    
    function App() {
        return (
            <div className="App">
                <TokenWallet />
            </div>
        );
    }
    
    export default App;
    ```
    
4. **Update `index.js`:**
    
    This file renders the main `App` component into the root div in `index.html`.
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    
    reportWebVitals();
    ```
    

### Step 7: Run the Frontend

1. **Start the React app:**
    
    ```bash
    cd frontend
    npm install
    npm start
    ```
    
    Your React application should now be running, and you can interact with the token wallet dApp through your browser.
    

## Conclusion

In this guide, you have learned how to build a simple token wallet dApp using Hardhat and React, integrated with the Apechain network. By following the step-by-step instructions, you have set up a Hardhat project, written a basic ERC20 token contract, deployed it to Apechain, and created a React frontend to interact with the contract. 

Here are some resources for you to get started:

- [Apechain documentation](https://ape-docs.vercel.app/)
- [Hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started)
- [Solidity documentation](https://docs.soliditylang.org/en/v0.8.26/)
- GitHub Repository
