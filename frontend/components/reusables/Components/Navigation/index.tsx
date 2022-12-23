/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import { Typography } from "../../Atoms";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import ConnectWalletNav from "../ConnectWalletNav/ConnectWalletNav";
import { useRouter } from "next/router";
import { style, width } from "@mui/system";

type NavigationProps = {};

export const Navigation = ({}: NavigationProps): JSX.Element => {
  const [open, setIsOpen] = useState(true);
  const [isDown, setIsDown] = useState(false);

  const [isDown2, setIsDown2] = useState(false);
  const [btnRotate, setBtnRotate] = useState(false);
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const router = useRouter();
  const pageName = router.pathname;

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
        {showConnectWallet && <ConnectWalletNav walletBtnStyle="webBtnStyle" />}
        {/* <div className={styles.navItem}>
          <Typography variant="body" color="black" className={styles.text}>
            Price Database
          </Typography>
          <Button variant="sm">Coming Soon</Button>
        </div>
        <div className={styles.navItem}>
          <Typography variant="body" color="black" className={styles.text}>
            Marketplace
          </Typography>
          <Button variant="sm">Coming Soon</Button>
        </div> */}
        {/* <div
          className={
            isDown2 ? `${styles.navDropdown} ${styles.navItem}` : styles.navItem
          }
        >
          <Typography
            variant="body"
            color="black"
            className={styles.text}
            onClick={() => setIsDown2(!isDown2)}
          >
            Departments <FaChevronDown className={styles.dropdownBtn} />
          </Typography>
          {isDown2 && (
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdownItem}>
                <Link href="/" passHref>
                  <Typography
                    variant="body"
                    color="black"
                    className={styles.dropdownText}
                  >
                    Modern & Contemporary South Asian Art
                  </Typography>
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <Link href="/" passHref>
                  <Typography
                    variant="body"
                    color="black"
                    className={styles.dropdownText}
                  >
                    Modern & Contemporary Indian Art
                  </Typography>
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <Link href="/" passHref>
                  <Typography
                    variant="body"
                    color="black"
                    className={styles.dropdownText}
                  >
                    Modern & Contemporary Middle Eastern Art
                  </Typography>
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <Link href="/" passHref>
                  <Typography
                    variant="body"
                    color="black"
                    className={styles.dropdownText}
                  >
                    Modern & Contemporary African Art
                  </Typography>
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <Link href="/" passHref>
                  <Typography
                    variant="body"
                    color="black"
                    className={styles.dropdownText}
                  >
                    Modern & Contemporary International Art
                  </Typography>
                </Link>
              </div>
            </div>
          )}
        </div> */}
        {/* <div
          className={
            isDown ? `${styles.navDropdown} ${styles.navItem}` : styles.navItem
          }
        >
          <Typography
            variant="body"
            color="black"
            className={styles.text}
            onClick={() => setIsDown(!isDown)}
          >
            Offerings <FaChevronDown className={styles.dropdownBtn} />
          </Typography>
          {isDown && (
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdownItem}>
                <Link href="/" passHref>
                  <Typography
                    variant="body"
                    color="black"
                    className={styles.dropdownText}
                  >
                    Upcoming
                  </Typography>
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <Link href="/" passHref>
                  <Typography
                    variant="body"
                    color="black"
                    className={styles.dropdownText}
                  >
                    Ongoing
                  </Typography>
                </Link>
              </div>
            </div>
          )}
        </div> */}
        {/* <div className={styles.navItem}>
          <Link href="/about" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              About Us
            </Typography>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/team" passHref>
            <Typography variant="body" color="black" className={styles.text}>
              Team
            </Typography>
          </Link>
        </div> */}
      </div>
      {showConnectWallet ? (
        <div className={styles.connectWallet_mobile_nav}>
          <ConnectWalletNav walletBtnStyle="mobBtnStyle" />
          <div className={styles.navColapse} onClick={() => setIsOpen(!open)}>
            <FaBars />
          </div>
        </div>
      ) : (
        <div className={styles.navColapse} onClick={() => setIsOpen(!open)}>
          <FaBars />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
