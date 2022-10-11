import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const APIContext = createContext<any>({
  API: null,
  walletAddress: "",
  setWalletAddress: (data: string) => {},
});

interface InterfaceAPIContextProvider {
  children: any;
}

export const APIContextProvider: React.FC<InterfaceAPIContextProvider> = ({
  children,
}) => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const API = axios.create({
    baseURL: "http://localhost:8000",
  });
  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_API_URI);
  });
  return (
    <APIContext.Provider value={{ API, walletAddress, setWalletAddress }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContext;
