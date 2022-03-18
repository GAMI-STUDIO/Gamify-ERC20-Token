require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const  mnemonic  = require('./secrets');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

//const fs = require('fs');
//const privateKey = fs.readFileSync(".secrets").toString().trim();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
      testnet: {
        url: "https://data-seed-prebsc-1-s1.binance.org:8545",
        chainId: 97,
        gasPrice: 20000000000,
        accounts: [mnemonic.key],

      },
       mainnet: {
         url: "https://bsc-dataseed.binance.org/",
         chainId: 56,
         gasPrice: 6500000000,
         accounts: [mnemonic.key],
      },
       telosTestnet: {
        url :"https://testnet.telos.net/evm",
        chainId: 41,
        gasPrice: 2000000000000,
        accounts: [mnemonic.key],
      }
    },
      

    solidity: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    etherscan: {
      apiKey: {
        bsc:'',
        bscTestnet: ''
      }
    }
};
