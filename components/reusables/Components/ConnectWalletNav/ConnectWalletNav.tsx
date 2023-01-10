import React, { useContext, useEffect, useState } from "react";
import style from "./connectWalletNav.module.scss";
import Web3Context from "../../../../context/Web3Context";
import { Button } from "../../../reusables2/Atoms/Button/index";

const ConnectWalletNav = ({ walletBtnStyle }: any) => {
  const [formattedAddress, setFormattedAddress] = useState("");
  const [wallet, setWallet] = useState(false);
  const {
    connectWallet,
    walletAddress,
    disconnectWallet
  } = useContext(Web3Context);

  useEffect(() => {
    if (walletAddress) {
      const addressFormatter = () => {
        const address =
          walletAddress.slice(0, 6) + "..." + walletAddress.slice(37, 42);
        setFormattedAddress(address);
      };
      addressFormatter();
    }
  }, [walletAddress]);
  return (
    <div className={style[walletBtnStyle]}>
      {walletAddress ? (
        <Button
          variant="detailsPageBtn"
          onClick={async () => {
            await disconnectWallet();
            setWallet(false);
          }}
        >
          {walletAddress && formattedAddress}
        </Button>
      ) : (
        <Button
          variant="detailsPageBtn"
          onClick={async () => {
            await connectWallet();
            setWallet(true);
          }}
        >
          Connect your wallet
        </Button>
      )}
    </div>
  );
};

export default ConnectWalletNav;
