require('dotenv').config()
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.etherscan_api
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    develop: {
      port: 7545,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          process.env.mnemonic,
          'https://rinkeby.infura.io/v3/4ac32ade39524ac1984ec61c80b732d4'
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: '0.7.0',
    },
  },
};
