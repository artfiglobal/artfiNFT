import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { Landing } from "../components/Home2";
import styles from "../styles/Home.module.scss";
import Web3Context from "../context/Web3Context";
import SnackBar from "../components/SnackBar/SnackBar";
import { Button } from "../components/reusables2/Atoms";
import { GeneralContext } from "../context/GeneralState";
import { Head } from "../components/reusables/Components";

export default function WhitelistLanding() {
  const [offerWhitelist, setOfferWhitelist] = useState({});
  const [offerUnveiling, setOfferUnveiling] = useState({});
  const [offeringId, setOfferingId] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  const [fractionSize, setFractionSize] = useState({ width: 0, height: 0 });
  const [artWorkImage, setArtWorkImage] = useState("");
  const [selCntPrevious, setSelCntPrevios] = useState<any>(0);
  const [artistImage, setArtistImage] = useState("");
  const [addDetailsPage, setAddDetailsPage] = useState(false);
  const [whatYouWillGet, setWhatYouWillGet] = useState(false);
  const [previosFractions, setPreviosFractions] = useState<any[]>([]);
  const [tableRowsCols, setTableRowsCols] = useState({
    columnCnt: 0,
    rowCnt: 0,
  });
  const [cellProps, setCellProps] = useState<any>([]);
  const { setArtistId } = useContext(GeneralContext);
  const [open, setOpen] = useState(false);
  const [, setWallet] = useState(false);
  const [likes,] = useState(0);
  const [maxFraction, setMaxFraction] = useState(0)

  const {
    connectWallet,
    walletAddress,
    disconnectWallet,
  } = useContext(Web3Context);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const first: any = localStorage?.getItem("walletAddress");
    const parsedData = JSON.parse(first);

    const fetchOffers = () => {
      fetch(
        `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getallongoingtrueoffering`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE1ZGJkNmE0YjZjZWQ2YzJiZjZlIiwiaWF0IjoxNjY5ODA5MTY5LCJleHAiOjE2NzI0MDExNjl9.oXlcdA_DLpOHROcMCX2rTHeviiWcvkEMarYhmkXB8gE`,
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
            setAddDetailsPage(
              response?.data?.trueOfferings[0]?.addDetails && true
            );
            setWhatYouWillGet(
              response?.data?.trueOfferings[0]?.nftDetails && true
            );
            const data = response.data.trueOfferings;
            const offerId = data[0]._id;
            setOfferingId(data[0]._id);
            const artistImage = response.data.artistImage;
            setArtistImage(artistImage);
            setArtistId(data[0].artistId);
            setTableRowsCols({
              columnCnt: data[0].whitelistDetails.columnNumber,
              rowCnt: data[0].whitelistDetails.rowNumber,
            });
            setFractionSize({
              width: data[0].whitelistDetails.width,
              height: data[0].whitelistDetails.height,
            });
            setMaxFraction(data[0].whitelistDetails.FractionNumber)
            setArtWorkImage(data[0].whitelistDetails.imageOfArtWork);
            const defineWhitelist = () => {
              data.map((item: any, index: number) => {
                if (item.IsOnGoingOffering) {
                  setOfferWhitelist(item.whitelistDetails);
                  setOfferUnveiling(item.unveilingDetails);
                  setPrice(item.whitelistDetails.price);
                }
              });
            };
            defineWhitelist();
            const fetchFractions = (data: any) => {
              fetch(
                `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/fraction/getfraction/${offerId}`
              )
                .then((response) => response.json())
                .then((response) => {
                  const fractions = response.fraction;
                  
                  let flattened: any[] = [];
                  let flattened2: any[] = [];
                  for (let j = 0; j < fractions?.length; j++) {
                    if (fractions[j]?.walletAddress === parsedData) {
                      setSelCntPrevios(fractions[j].fractionInfo.length);
                      for (
                        let k = 0;
                        k < fractions[j].fractionInfo.length;
                        k++
                      ) {
                        flattened.push(fractions[j].fractionInfo[k]);
                      }
                    } else if (fractions[j]?.walletAddress != parsedData) {
                      for (
                        let k = 0;
                        k < fractions[j].fractionInfo.length;
                        k++
                      ) {
                        flattened2.push(fractions[j].fractionInfo[k]);
                      }
                    }
                  }
                  let combinedArrays = [...flattened, ...flattened2];
                  for (
                    let i = 0;
                    i <
                    data[0].whitelistDetails.rowNumber *
                      data[0].whitelistDetails.columnNumber;
                    i++
                  ) {
                    if (combinedArrays.includes(`${i}`)) {
                      cellProps[i] = "disable";
                      // console.log(i);
                    } else {
                      cellProps[i] = "";
                    }
                  }
                  
                  setPreviosFractions(flattened);
                });
            };
            fetchFractions(data);
          }
        );
    };

    fetchOffers();
  }, [cellProps, setArtistId]);

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
    <div className={styles.home}>
      <Head title="Artfi" />
      <div className={styles.whitelistNavbar}>
        <Image
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
            }}
          >
            {walletAddress && formattedAddress}
          </Button>
        ) : (
          <Button
            variant="primary"
            style={{ width: "190px", cursor: "pointer", fontSize: "16px", padding: "10px 16.5px" }}
            onClick={async () => {
              await connectWallet();
              setWallet(true);
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
          price={price}
          setPrice={setPrice}
          previosFractions={previosFractions}
          artistImage={artistImage}
          selCntPrevious={selCntPrevious}
          offeringId={offeringId}
          artWorkImage={artWorkImage}
          cellProps={cellProps}
          addDetailsPage={addDetailsPage}
          whatYouWillGet={whatYouWillGet}
          setCellProps={setCellProps}
          fractionSize={fractionSize}
          tableRowsCols={tableRowsCols}
          setOpen={setOpen}
          maxFraction={maxFraction}
        />
      </main>
      <SnackBar setOpen={setOpen} open={open} />
    </div>
  );
}
