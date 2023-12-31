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
      accounts: [process.env.privatekey],
    },
  },
};
