/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/wvMujtS5nQKX6tfNQmawzoiBwSpehQ7M",
      accounts: ["289b80ff6b375a1aa73f1a83b3b2b1476dc50d1e37e193601c936e422f944e06"],
    },
  },
};
