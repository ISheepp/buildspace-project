//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "hardhat/console.sol";

/**
 * @dev wave contract and statistics
 */
contract WavePortal {
    uint256 private totalWaves;

    constructor() {
        console.log("Yoo yo, I am a contract and smart");
    }

    /**
     * @dev wave
     */
    function wave() external {
        console.log("%s has waved", msg.sender);
        totalWaves++;
    }

    function getTotalWaves() external view returns (uint256) {
        console.log("we have total %d waves", totalWaves);
        return totalWaves;
    }
}
