import {Web3} from "web3";

const SEPOLIA_INFURA_URL = "https://sepolia.infura.io/v3/8ee09ed48efc475e8953b95c3feaf1f7"
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    SEPOLIA_INFURA_URL
  );
  web3 = new Web3(provider);
}
 
export default web3;