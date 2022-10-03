import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";

export type Web3DataInterface = {
  signer: JsonRpcSigner;
  provider: Web3Provider;
} | null;

export type Web3ContextInterface = {
  web3Data: Web3DataInterface;
  setWeb3Data: (data: Web3DataInterface) => void;
};
