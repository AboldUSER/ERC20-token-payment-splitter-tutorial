const hre = require("hardhat");

async function main() {
  [deployer] = await hre.ethers.getSigners();
  const MockPool = await hre.ethers.getContractFactory("MockPool");
  const mockPool = await MockPool.deploy(deployer, 10);

  await mockPool.deployed();

  console.log("MockPool deployed to:", mockPool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });