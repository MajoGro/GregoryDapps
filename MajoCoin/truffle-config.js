import 'babel-register';
import 'babel-polyfill';
require('dotenv').config();
import HDWalletProvider from "@truffle/hdwallet-provider";
const { API_KEY, PRIVATE_KEY } = process.env;

export const networks = {
  development: {
    host: "localhost",
    port: 7545,
    network_id: "*",
    gas: 5000000
  },
  ropsten: {
    provider: function () {
      return new HDWalletProvider(PRIVATE_KEY, API_KEY);
    },
    network_id: 3
  }
};
export const compilers = {
  solc: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  }
};
