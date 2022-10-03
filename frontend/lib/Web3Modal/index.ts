import Web3Modal from "web3modal";
import providerOptions from "./providerOptions";

let web3Modal: Web3Modal

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    // network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
}

export { web3Modal }
