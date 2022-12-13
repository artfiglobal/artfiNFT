import { useContext, useState } from "react";
import { Landing } from "../components/Home2";
import { Container, Button } from "../components/reusables2/Atoms";
import { Footer } from "../components/reusables/Components/Footer2";
import { Navigation, Head } from "../components/reusables/Components";
import styles from "../styles/Home.module.scss";
// import { Container, Typography,  } from "../../reusables2/Atoms";
import Web3Context from "../context/Web3Context";
import { web3Modal } from "../lib/Web3Modal/index";

export default function WhitelistLanding() {
  const [wallet, setWallet] = useState(false);
  const [likes, setLikes] = useState(0);
  const { web3Data, setWeb3Data, connectWallet, walletAddress } =
    useContext(Web3Context);
  return (
    <div className={styles.home}>
      <Head title="Artfi" />
      {/* <Navigation /> */}
      <div className={styles.whitelistNavbar}>
        <img
          style={{ cursor: "pointer" }}
          src="/images/reusables/Artfi.png"
          alt="Artfi"
          className={styles.logo}
          height={30}
          width={75}
        />
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
      </div>
      <main className={styles.main}>
        <Landing likes={likes} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
