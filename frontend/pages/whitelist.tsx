import { useContext, useEffect, useState } from "react";
import { Landing } from "../components/Home2";
import { Container, Button } from "../components/reusables2/Atoms";
import { Footer } from "../components/reusables/Components/Footer2";
import { Navigation, Head } from "../components/reusables/Components";
import styles from "../styles/Home.module.scss";
// import { Container, Typography,  } from "../../reusables2/Atoms";
import Web3Context from "../context/Web3Context";
import { web3Modal } from "../lib/Web3Modal/index";
import axios from "axios";

export default function WhitelistLanding() {
  const [offerWhitelist, setOfferWhitelist] = useState({});
  const [offerUnveiling, setOfferUnveiling] = useState({});
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getallheader`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE2YjdhZmM4ZDk3ZGMzZWYyZjU4IiwiaWF0IjoxNjcwODE2MDczLCJleHAiOjE2NzM0MDgwNzN9.850__kq6IrHdiqa3J43BL1bN_w3ZLwQOSdmnH4Cokys`,
              "Content-Type": "application/json",
              "Content-Length": "<calculated when request is sent>",
            },
          }
        );
        const data = response.data.data;
        const defineWhitelist = () => {
          data.map((item: any, index: number) => {
            if (item.IsOnGoingOffering) {
              setOfferWhitelist(item.whitelistDetails);
              setOfferUnveiling(item.unveilingDetails);
            }
          });
        };
        defineWhitelist();
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOffers();
  }, []);
  // console.log(offerWhitelist);
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
        <Landing
          offerWhitelist={offerWhitelist}
          offerUnveiling={offerUnveiling}
          likes={likes}
        />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
