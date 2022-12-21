import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { APIContextProvider } from "../context/APIContext";
import { Web3ContextProvider } from "../context/Web3Context";
import "../styles/walletConnect.css";
import GeneralProvider from "../context/GeneralState";

const supportedChainsIds = [1, 4];
const connectors = {
  injected: {},
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <APIContextProvider>
      <Web3ContextProvider>
        <GeneralProvider>
          <Component {...pageProps} />
        </GeneralProvider>
      </Web3ContextProvider>
    </APIContextProvider>
  );
}

export default MyApp;
