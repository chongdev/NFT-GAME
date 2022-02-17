
const hre = require("hardhat");

async function main() {

  const THTESTNFT1155 = await hre.ethers.getContractFactory("THTESTNFT1155");
  const thtestnft1155 = await THTESTNFT1155.deploy();

  await thtestnft1155.deployed();

  console.log("NFT1155 deployed to:", thtestnft1155.address);

  await hre.run("verify:verify", {
    address: thtestnft1155.address
  })

  // 0xf229EF0FD0b1483B8f5E74786B303BaeB20551c4
  console.log("NFT1155 Verify success:");
}

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });