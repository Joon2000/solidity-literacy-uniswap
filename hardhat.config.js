require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-docgen");
require('dotenv').config()

module.exports = {
    solidity: "0.8.20",
    networks: {
        sepolia: {
            url: `${process.env.SEPOLIA_RPC_URL}`,
            accounts: [
                `${process.env.PRIVATE_KEY}`,
            ],
        },
    },
    etherscan: {
        apiKey: `${process.env.ETHERSCAN_API_KEY}`
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    docgen: {
      path: './docs',
      clear: true,
    }
};
