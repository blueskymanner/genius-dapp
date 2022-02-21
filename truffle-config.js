require("chai/register-should");

const solcStable = {
  version: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

const solcNightly = {
  version: "nightly",
  docker: true,
};

const useSolcNightly = process.env.SOLC_NIGHTLY === "true";

module.exports = {
  networks: {
    // development: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: "*", // eslint-disable-line camelcase
    // },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1337", // eslint-disable-line camelcase
    },
    coverage: {
      host: "localhost",
      network_id: "*", // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
  },
  compilers: {
    solc: useSolcNightly ? solcNightly : solcStable,
  },
  plugins: ["solidity-coverage"],
};
