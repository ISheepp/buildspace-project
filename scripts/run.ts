import { ethers } from "hardhat";

const main = async () => {
    const wavePortalContractFactory = await ethers.getContractFactory("WavePortal");
    const contract = await wavePortalContractFactory.deploy();
    await contract.deployed();
    console.log(`the WavePortal contract was deployed on ${contract.address}`)
}

const runMain = async () => {
    try {
        await main();
        console.error("error");
        
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();