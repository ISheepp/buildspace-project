import { ethers } from "hardhat";

const main = async () => {
    const [owner, signer1] = await ethers.getSigners();
    console.log(`当前默认signer：${owner.address}`);
    
    const wavePortalContractFactory = await ethers.getContractFactory("WavePortal");
    const contract = await wavePortalContractFactory.deploy();

    await contract.deployed();
    console.log(`the WavePortal contract was deployed on ${contract.address}`)

    // wave
    await contract.wave();
    // 换个人挥手
    await contract.connect(signer1).wave();
    console.log(`当前的挥手总次数是${await contract.getTotalWaves()}`);

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