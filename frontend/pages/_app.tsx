import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { APIContextProvider } from "../context/APIContext";
import { Web3ContextProvider } from "../context/Web3Context";
import "../styles/walletConnect.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <APIContextProvider>
      <Web3ContextProvider>
        <Component {...pageProps} />
      </Web3ContextProvider>
    </APIContextProvider>
  );
}

export default MyApp;
