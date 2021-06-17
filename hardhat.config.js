require('hardhat-deploy');
require('dotenv').config();

const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID } = process.env;

module.exports = {
  solidity: '0.6.12',
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 1,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 42,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};
