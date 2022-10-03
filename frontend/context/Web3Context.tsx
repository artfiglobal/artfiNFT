import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { Web3ContextInterface, Web3DataInterface } from "./types";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

export const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web 3 Modal Demo",
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
    },
  },
};

//FOR NOW THIS FILE IS NOT USED BUT IT MIGHT BE USEFUL IN THE FUTURE IN CASE WE RAN INTO ISSUES WITH THE CONTEXT

// interface IWeb3Context {
//   web3Data: any;
//   setWeb3Data: any;
//   provider:any;
//   library:any;

// }

const Web3Context = createContext<any>({
  web3Data: null,
  setWeb3Data: (data: any) => {},
  provider: null,
  library: null,
  walletAddress: "",
  network: null,
  connectWallet: () => {},
  disconnectWallet: () => {},
});

interface IWeb3ContextProvider {
  children: any;
}

export const Web3ContextProvider: React.FC<IWeb3ContextProvider> = ({
  children,
}) => {
  const [web3Modal, setWeb3Modal] = useState<any>(null);
  const [web3Data, setWeb3Data] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const [library, setLibrary] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [network, setNetwork] = useState<any>(null);

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const walletAddress = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (walletAddress) setWalletAddress(walletAddress[0]);
      setNetwork(network);
      const newWeb3Data = { provider, library };
      console.log({ newWeb3Data });
      setWeb3Data(newWeb3Data);
      return newWeb3Data;
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    console.log("hello");
    setWalletAddress("");
  };
  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions, // required
    });
    setWeb3Modal(web3Modal);
  }, []);
  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]);
  return (
    <Web3Context.Provider
      value={{
        web3Data,
        setWeb3Data,
        provider,
        library,
        walletAddress,
        network,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
