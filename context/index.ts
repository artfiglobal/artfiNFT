import React, { createContext, useState } from "react";
import { Web3DataInterface, Web3ContextInterface } from "./types";

const web3Context = createContext<Web3ContextInterface>({
  web3Data: null,
  setWeb3Data: (_data: Web3DataInterface) => {},
});

export { web3Context };
