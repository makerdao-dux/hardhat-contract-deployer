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
