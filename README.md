# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

1. Start Node.
```shell
npx hardhat node
```

2. Another shell.
```shell
npx hardhat run scripts/deploy.js --network localhost
```

3. For openning a console.
```shell
npx hardhat console --network localhost
```