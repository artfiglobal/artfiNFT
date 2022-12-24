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
import { GeneralContext } from "../context/GeneralState";

export default function WhitelistLanding() {
  const [offerWhitelist, setOfferWhitelist] = useState({});
  const [offerUnveiling, setOfferUnveiling] = useState({});
  const [formattedAddress, setFormattedAddress] = useState("");
  const [fractionSize, setFractionSize] = useState({ width: 0, height: 0 });
  const [artWorkImage, setArtWorkImage] = useState("");
  const [artistImage, setArtistImage] = useState("");
  const [tableRowsCols, setTableRowsCols] = useState({
    columnCnt: 0,
    rowCnt: 0,
  });
  const [cellProps, setCellProps] = useState<any>([]);
  const { setArtistId } = useContext(GeneralContext);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        //${process.env.NEXT_PUBLIC_React_App_Base_Url}
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getallongoingtrueoffering`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE1ZGJkNmE0YjZjZWQ2YzJiZjZlIiwiaWF0IjoxNjY5ODA5MTY5LCJleHAiOjE2NzI0MDExNjl9.oXlcdA_DLpOHROcMCX2rTHeviiWcvkEMarYhmkXB8gE`,
              "Content-Type": "application/json",
              "Content-Length": "<calculated when request is sent>",
            },
          }
        );
        console.log(response);
        const data = response.data.data.trueOfferings;
        const artistImage = response.data.data.artistImage;
        setArtistImage(artistImage);
        setArtistId(data[0].artistId);
        console.log(data[0], "data");
        setTableRowsCols({
          columnCnt: data[0].whitelistDetails.columnNumber,
          rowCnt: data[0].whitelistDetails.rowNumber,
        });

        setFractionSize({
          width: data[0].whitelistDetails.width,
          height: data[0].whitelistDetails.height,
        });
        for (
          let i = 0;
          i <
          data[0].whitelistDetails.rowNumber *
            data[0].whitelistDetails.columnNumber;
          i++
        ) {
          cellProps[i] = "";
        }
        for (let i = 0; i < 50; i++) {
          cellProps[i++ + i++ * i++ + i++ + i++] = "disable";
        }
        setArtWorkImage(data[0].whitelistDetails.imageOfArtWork);
        const defineWhitelist = () => {
          data.map((item: any, index: number) => {
            if (item.IsOnGoingOffering) {
              setOfferWhitelist(item.whitelistDetails);
              setOfferUnveiling(item.unveilingDetails);
            }
          });
        };
        defineWhitelist();
        // console.log(offerWhitelist);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOffers();
  }, []);
  const [wallet, setWallet] = useState(false);
  const [likes, setLikes] = useState(0);
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

  // console.log(formattedAddress);
  // console.log(walletAddress);
  return (
    <div className={styles.home}>
      <Head title="Artfi" />
      <img
        src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/${artWorkImage}`}
        alt=""
      />
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
      <main className={styles.main}>
        <Landing
          offerWhitelist={offerWhitelist}
          offerUnveiling={offerUnveiling}
          likes={likes}
          // artistId={artistId}
          artistImage={artistImage}
          artWorkImage={artWorkImage}
          // rowCnt={rowCnt}
          // columnCnt={columnCnt}
          cellProps={cellProps}
          setCellProps={setCellProps}
          fractionSize={fractionSize}
          tableRowsCols={tableRowsCols}
        />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
