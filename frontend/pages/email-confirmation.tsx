import React, { useContext, useEffect, useState } from "react";
import Web3Context from "../context/Web3Context";
import styles from "../styles/Home.module.scss";
import { Button } from "../components/reusables2/Atoms";
import checkMark from "../public/Icons/checkMark.svg";
import Image from "next/image";
import Typography from "../components/reusables2/Atoms/Typography2";
const EmailWhitelist = () => {
  const [wallet, setWallet] = useState(false);
  const [formattedAddress, setFormattedAddress] = useState("");
  const {
    web3Data,
    setWeb3Data,
    connectWallet,
    walletAddress,
    disconnectWallet,
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
    <div className={styles.emailConfirmationPage}>
      <div className={styles.whitelistNavbar}>
        <img
          style={{ cursor: "pointer" }}
          src="/images/reusables/Artfi.png"
          alt="Artfi"
          className={styles.logo}
          height={30}
          width={75}
        />
        {walletAddress ? (
          <Button
            variant="primary"
            style={{ width: "190px", fontSize: "16px", padding: "10px 16.5px" }}
            onClick={async () => {
              await disconnectWallet();
              setWallet(false);
              // addressFormatter(walletAddress);
              // connectWallet().then(() => {
              //   getData();
              //   setWallet(true);
              //   console.log("hello");
              // });
            }}
          >
            {walletAddress && formattedAddress}
          </Button>
        ) : (
          <Button
            variant="primary"
            style={{ width: "190px", fontSize: "16px", padding: "10px 16.5px" }}
            onClick={async () => {
              await connectWallet();
              setWallet(true);
              // connectWallet().then(() => {
              //   getData();
              //   setWallet(true);
              //   console.log("hello");
              // });
            }}
          >
            Connect your wallet
          </Button>
        )}
      </div>
      <div className={styles.emailWhitelist}>
        <Image src={checkMark} alt="" width="100" height="100" />
        <Typography fontWeight="bold" variant="heading" color="black">
          Thank you for whitelisting the Artfi NFT
        </Typography>
        <Typography
          fontWeight="bold"
          variant="smallHeading"
          color="confirmEmail"
        >
          You will get a confirmation email for the whitelisting of your Artfi
          NFT.
        </Typography>
        <Typography
          fontWeight="bold"
          variant="smallHeading"
          color="confirmEmail"
        >
          28 Oct, 2022 - 15:30
        </Typography>
        <Button
          type="submit"
          variant="primary"
          // onClick={completePurchase}
        >
          Okay
        </Button>
      </div>
    </div>
  );
};

export default EmailWhitelist;
