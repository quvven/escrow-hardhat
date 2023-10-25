// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const escrow = await hre.ethers.deployContract("Escrow", [
        "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
        "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"
    ]);

    console.log(escrow.address, escrow.target, escrow);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

/// npx hardhat test 
/// npx hardhat run scripts/deploy.js
/// npx hardhat run scripts/deploy.js --verbose
/// npx hardhat run scripts/deploy.js --network goerli
/// npx hardhat run scripts/deploy.js --network goerli --verbose
///


// Deployed: 0x6CC7a4E6048a81Ef9c9d3BbD3b459BB2AD25Ef20
// Deployed: 0x39a46A1332D5BeE86b32e5876bAb114ED3abF7FB
//
