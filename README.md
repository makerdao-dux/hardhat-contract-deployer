# Hardhat Contract Deployer

A simple contract deployer built with [Hardhat](https://hardhat.org/) and the [hardhat-deploy](https://hardhat.org/plugins/hardhat-deploy.html) plugin

## Install

Clone repo

`cd` into directory

`npm install`

## Configure

The project requires a `.env` file that contains two values

Create a `.env` file in the root directory and copy the contents from `.example.env`

`DEPLOYER_PRIVATE_KEY` is the private key of the address you wish to deploy from

- [How to export a private key from MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)

`INFURA_PROJECT_ID` is needed to connect to the Ethereum network via [Infura](https://infura.io/)

- [How to obtain a Project ID](https://infura.io/docs/gettingStarted/chooseaNetwork.md)

The project comes with configuration for mainnet and kovan

Additional networks can be configured in `hardhat.config.js`:

```
module.exports = {
  ..config
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
  }
};
```

## How to deploy

1. Add your contract(s) to the `/contracts` directory
2. Update the deploy script at `deploy/00_contract_deployer.js`

```
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy('VoteDelegateFactory', {
    from: deployer,
    args: [
      '0x27E0c9567729Ea6e3241DE74B3dE499b7ddd3fe6',
      '0x518a0702701BF98b5242E73b2368ae07562BEEA3',
    ],
    log: true,
  });
};
module.exports.tags = ['VoteDelegateFactory'];
```

- Replace both occurances of `VoteDelegateFactory` with the name of your contract
- Replace `args` with any necessary arguments, or remove the option if there are none
- Additional information including how to deploy multiple contracts can be found [here](https://hardhat.org/plugins/hardhat-deploy.html#hardhat-deploy-in-a-nutshell)

3. Run `npx hardhat --network <network> deploy` to deploy
