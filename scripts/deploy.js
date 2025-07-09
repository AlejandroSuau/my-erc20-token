const { ethers } = require("hardhat");

async function main() {
    const initialSupply = ethers.parseUnits("1000", 18); // 1000 tokens
    const TrueBooleanToken = await ethers.getContractFactory("TrueBooleanToken");
    const token = await TrueBooleanToken.deploy(initialSupply);

    console.log(`TrueBooleanToken deployed to: ${token.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

