/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Button } from "@mui/material";

import { Typography } from "../../Atoms";
import { useRouter } from "next/router";
import Web3Context from "../../../../context/Web3Context";

import styles from "./Navigation.module.scss";

type NavigationProps = {};

export const Navigation = ({}: NavigationProps): JSX.Element => {
  const [, setWallet] = useState(false);
  const [open, setIsOpen] = useState(true);
  const [, setShowConnectWallet] = useState(false);
  const [formattedAddress, setFormattedAddress] = useState("");

  const router = useRouter();
  const pageName = router.pathname;

  const {
    web3Data,
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

  useEffect(() => {
    if (pageName === "/artwork-details") {
      setShowConnectWallet(true);
    } else setShowConnectWallet(false);
  }, [pageName]);

  return (
    <nav className={styles.container}>
      <Link href="/" passHref>
        <img
          style={{ cursor: "pointer" }}
          src="/images/reusables/Artfi.png"
          alt="Artfi"
          className={styles.logo}
          height={30}
          width={75}
        />
      </Link>

      <div className={open ? styles.navigation : styles.open}>
        <div className={styles.navItem}>
          <Link href="/artists" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Artists
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/header" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Offerings
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/about-us" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              About us
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/project" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Project
            </Typography>
          </Link>
        </div>

        <div className={styles.navItem}>
          <Link href="/how-it-works" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              How it works
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="http://artfi.foundation/" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Museum
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/token" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Artfi Token
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/team" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Team
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/contact" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Contact Us
            </Typography>
          </Link>
        </div>
        {walletAddress ? (
          <Button
            style={{
              width: "fit-content",
              marginLeft: "32px",
              fontSize: "16px",
              color: "black",
              border: "1px solid black",
              padding: "10px 16.5px",
            }}
            onClick={async () => {
              await disconnectWallet();
              setWallet(false);
            }}
          >
            {walletAddress && formattedAddress}
          </Button>
        ) : (
          <Button
            style={{
              width: "fit-content",
              marginLeft: "32px",
              borderRadius: "10px",
              fontSize: "16px",
              color: "black",
              border: "1px solid black",
              background: "rgba(255, 255, 255, 0.6)",
              padding: "10px 16.5px",
              fontWeight: "700",
              fontFamily: "Plus Jakarta Sans",
            }}
            onClick={async () => {
              await connectWallet();
              setWallet(true);
            }}
          >
            Connect your wallet
          </Button>
        )}
      </div>
      <div className={styles.navColapse} onClick={() => setIsOpen(!open)}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navigation;
