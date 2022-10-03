/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect } from "react";
import { Button } from "../../Atoms";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

import styles from "./Navigation.module.scss";

import { ethers } from "ethers";

import { web3Modal } from "../../../../lib/Web3Modal";
import { web3Context } from "../../../../context";
import APIContext from "../../../../context/APIContext";
import Web3Context from "../../../../context/Web3Context";

type NavigationProps = {};

export const Navigation = ({}: NavigationProps): JSX.Element => {
  const [open, setIsOpen] = useState(true);
  const {
    web3Data,
    setWeb3Data,
    walletAddress,
    connectWallet,
    disconnectWallet,
  } = useContext(Web3Context);
  // const [web3Data, setWeb3Data] = useState<Web3DataInterface>();

  return (
    <nav className={styles.container}>
      <div className={styles.navContainer}>
        <Link href="/" passHref>
          <img
            style={{ cursor: "pointer" }}
            src="/images/reusables/Artfi.png"
            alt="Artfi"
            className={styles.logo}
            height={36}
          />
        </Link>

        <div className={open ? styles.navigation : styles.open}>
          <div className={styles.navLinks}>
            <div className={styles.navItem}>
              <Link href="/about-us" passHref>
                <p className={styles.text}>Ongoing Offerings</p>
              </Link>
              <div className={styles.navItemBtn}>Coming Soon</div>
            </div>
            <div className={styles.navItem}>
              <Link href="/about-us" passHref>
                <p className={styles.text}>Upcoming Offerings</p>
              </Link>
              <div className={styles.navItemBtn}>Coming Soon</div>
            </div>
            <div className={styles.navItem}>
              <Link href="/about-us" passHref>
                <p className={styles.text}>Marketplace</p>
              </Link>
              <div className={styles.navItemBtn}>Coming Soon</div>
            </div>
          </div>
          <div className={styles.navBtn}>
            {walletAddress ? (
              <Button variant="primaryNav" onClick={disconnectWallet}>
                Disconnect wallet
              </Button>
            ) : (
              <Button variant="primaryNav" onClick={connectWallet}>
                Connect your wallet
              </Button>
            )}
          </div>
        </div>
        <div className={styles.navColapse} onClick={() => setIsOpen(!open)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
