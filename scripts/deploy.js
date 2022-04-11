// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  // We get the contract to deploy
  const exampleTokenFactory = await hre.ethers.getContractFactory("ExampleToken");

  const exampleTokenContract = await exampleTokenFactory.deploy();
  await exampleTokenContract.deployed();
  console.log(exampleTokenContract.address);
  const decimals = await exampleTokenContract.decimals();
  console.log(decimals);
  return decimals
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });