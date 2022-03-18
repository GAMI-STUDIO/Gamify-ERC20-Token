# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
# Gami Token

This project demonstrates a basic ERC-20 Token named Gami with burn funcionality.

# Deploy 
npx hardhat run --network testnet scripts/deploy.js  
npx hardhat run --network mainnet scripts/deploy.js  

# Compile 
npx hardhat compile  

# Flatten
npx hardhat flatten contracts/token.sol > FlatGamiTestToken.sol

# Openzeppelin Contracts

npm install --save-dev @openzeppelin/contracts   
npm i @openzeppelin/contracts-upgradeable 
npm install -g npm    
npx hardhat / npm install hardhat

npm install --save-dev @nomiclabs/hardhat-etherscan
npx hardhat  verify --network testnet 0x358808491a95049FCf9F5327f7BAeaB0d60DA6F0

# Update all packages

npm i -g npm-check-updates
npm install
