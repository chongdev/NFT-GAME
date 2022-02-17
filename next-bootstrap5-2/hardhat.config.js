require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require("dotenv").config();

const { mnemonic } = require('./secrets.json');
const fs = require('fs')
//const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const privateKey = fs.readFileSync(".secret", {encoding: 'utf8', flag:'r' })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },  
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      chainId: 1337
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.WALLET_PRIVATE_KEY !== undefined ? [process.env.WALLET_PRIVATE_KEY] : [],
    },
    mumbai_testnet: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      accounts: [privateKey]
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
