import { ethers } from "hardhat";

const main = async () => {
    const [owner, signer1] = await ethers.getSigners();
    console.log(`当前默认signer：${owner.address}`);
    console.log(`当前默认signer： privateKey${owner}`);
    
    const wavePortalContractFactory = await ethers.getContractFactory("WavePortal");
    const contract = await wavePortalContractFactory.deploy();

    await contract.deployed();
    console.log(`部署的地址是：${contract.address}`);

}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();