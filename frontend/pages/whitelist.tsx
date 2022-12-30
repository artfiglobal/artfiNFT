import { useContext, useEffect, useState } from "react";
import { Landing } from "../components/Home2";
import { Button } from "../components/reusables2/Atoms";
import { Head } from "../components/reusables/Components";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
// import { Container, Typography,  } from "../../reusables2/Atoms";
import { ethers } from "ethers";
import Web3Context from "../context/Web3Context";
import { web3Modal } from "../lib/Web3Modal/index";
import { GeneralContext } from "../context/GeneralState";

export default function WhitelistLanding() {
  const {
    web3Data,
    setWeb3Data,
    connectWallet,
    walletAddress,
    disconnectWallet,
  } = useContext(Web3Context);
  const [price, setPrice] = useState(0);

  const [offerWhitelist, setOfferWhitelist] = useState({});
  const [offerUnveiling, setOfferUnveiling] = useState({});
  const [offeringId, setOfferingId] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  const [fractionSize, setFractionSize] = useState({ width: 0, height: 0 });
  const [artWorkImage, setArtWorkImage] = useState("");
  const [selCntPrevious, setSelCntPrevios] = useState<any>(0);
  // const [selCnt, setSelCnt] = useState<any>(0);
  const [artistImage, setArtistImage] = useState("");
  const [previosFractions, setPreviosFractions] = useState<any[]>([]);
  const [tableRowsCols, setTableRowsCols] = useState({
    columnCnt: 0,
    rowCnt: 0,
  });
  console.log(selCntPrevious);
  // const [first, setfirst] = useState("");
  // const [wallet, setWallet] = useState(false);
  // const [likes, setLikes] = useState(0);

  const [cellProps, setCellProps] = useState<any>([]);
  const { setArtistId } = useContext(GeneralContext);
  // const [findWallet, setFindWallet] = useState("");

  useEffect(() => {
    const first: any = localStorage?.getItem("walletAddress");
    const parsedData = JSON.parse(first);
    // let variable;
    // console.log(typeof parsedData, "this is wallet ID");

    const getWalletAddress: any = async () => {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const walletAddress = await library.listAccounts();
      // console.log(walletAddress);

      return walletAddress[0];
      // setFindWallet(walletAddress[0]);
    };
    // var makeitWork = "";
    // const walletAddress = getWalletAddress().then((response: any) => {
    //   function runrunrn(response: string) {
    //     makeitWork = response;

    //     return makeitWork;
    //   }
    //   return runrunrn(response);
    //   // return makeitWork;
    // });
    // console.log(makeitWork);

    // getWalletAddress();

    // console.log(findWallet, "findWallet");
    // console.log(walletAddress, "walletAddress");
    // .then((response) => {
    //   variable = response;
    //   console.log(variable, "response");
    //   return variable;
    // });
    // console.log(walletAddress);
    const fetchOffers = () => {
      // if (items) {
      //  setItems(items);
      // }
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
        .then(
          (response) => {
            console.log(response.data.trueOfferings[0], "response");
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
                  // const address = "0x4438e0fc3715D7A7519e49247E8b416564f883ED";
                  const fractions = response.fraction;
                  console.log(fractions, "fractions");
                  // console.log(cellProps, "cellProps");
                  // console.log(parsedData, "parsedData");
                  let flattened: any[] = [];
                  let flattened2: any[] = [];
                  for (let j = 0; j < fractions?.length; j++) {
                    // flattened.push(fractions[j]?.fractionInfo);
                    if (fractions[j]?.walletAddress === parsedData) {
                      setSelCntPrevios(fractions[j].fractionInfo.length);
                      console.log(fractions[j]?.walletAddress, "my wallet");
                      // console.log(fractions[j].fractionInfo, "my wallet");
                      for (
                        let k = 0;
                        k < fractions[j].fractionInfo.length;
                        k++
                      ) {
                        flattened.push(fractions[j].fractionInfo[k]);
                      }
                    } else if (fractions[j]?.walletAddress != parsedData) {
                      console.log(fractions[j]?.walletAddress, "not my wallet");
                      // console.log(fractions[j].fractionInfo, "not my wallet");
                      // console.log(fractions[j].fractionInfo, "sdasdasd");
                      // setSelCntPrevios(fractions[j].fractionInfo.length);
                      for (
                        let k = 0;
                        k < fractions[j].fractionInfo.length;
                        k++
                      ) {
                        flattened2.push(fractions[j].fractionInfo[k]);
                      }
                    }
                    // flattened = [...array];
                    // if (array?.includes(`${i}`)) {
                    //   // if (fractions[j]?.walletAddress === parsedData) {
                    //   //   cellProps[i] = "selected";
                    //   // } else if (fractions[j]?.walletAddress != parsedData) {
                    //   // console.log("make it work ");
                    //   cellProps[i] = "disable";
                    //   // }
                    // } else {
                    //   cellProps[i] = "";
                    // }
                    // console.log(flattened.flat());
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

                  // for (
                  //   let i = 0;
                  //   i <
                  //   data[0].whitelistDetails.rowNumber *
                  //     data[0].whitelistDetails.columnNumber;
                  //   i++
                  // ) {
                  //   cellProps[i] = "";
                  // }
                  // for (
                  //   let i = 0;
                  //   i <
                  //   data[0].whitelistDetails.rowNumber *
                  //     data[0].whitelistDetails.columnNumber;
                  //   i++
                  // ) {
                  //   cellProps[i++ + i++ * i++ + i++ + i++] = "disable";
                  // }
                  setPreviosFractions(flattened);
                });
            };
            fetchFractions(data);
          }
          // const fetchFractions = async (previousResponse: any) => {
          //   // console.log(data, "data");

          // console.log(offerWhitelist);
          // console.log(data)
        );
      // var data = response.data.data.trueOfferings;
      // const offerId = data[0]._id;
      // setOfferingId(data[0]._id);
      // const artistImage = response.data.data.artistImage;
      // setArtistImage(artistImage);
      // setArtistId(data[0].artistId);
      // setTableRowsCols({
      //   columnCnt: data[0].whitelistDetails.columnNumber,
      //   rowCnt: data[0].whitelistDetails.rowNumber,
      // });
      // setFractionSize({
      //   width: data[0].whitelistDetails.width,
      //   height: data[0].whitelistDetails.height,
      // });
      // setArtWorkImage(data[0].whitelistDetails.imageOfArtWork);
      // const defineWhitelist = () => {
      //   data.map((item: any, index: number) => {
      //     if (item.IsOnGoingOffering) {
      //       setOfferWhitelist(item.whitelistDetails);
      //       setOfferUnveiling(item.unveilingDetails);
      //     }
      //   });
      // };
      // defineWhitelist();
      // const fetchFractions = async (previousResponse: any) => {
      //   // console.log(data, "data");
      //   const response = await axios.get(
      //     `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/fraction/getfraction/${offerId}`
      //   );
      //   for (
      //     let i = 0;
      //     i <
      //     previousResponse[0].whitelistDetails.rowNumber *
      //       previousResponse[0].whitelistDetails.columnNumber;
      //     i++
      //   ) {
      //     cellProps[i] = "";
      //   }
      //   for (
      //     let i = 0;
      //     i <
      //     previousResponse[0].whitelistDetails.rowNumber *
      //       previousResponse[0].whitelistDetails.columnNumber;
      //     i++
      //   ) {
      //     cellProps[i++ + i++ * i++ + i++ + i++] = "disable";
      //   }
      //   const data = response.data.fraction;
      //   setPreviosFractions(data);
      // };
      // fetchFractions(data);
      // console.log(offerWhitelist);
    };

    fetchOffers();
  }, []);
  // console.log(selCnt);
  // console.log(previosFractions, "previosFractions");
  const [wallet, setWallet] = useState(false);
  const [likes, setLikes] = useState(0);

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
          price={price}
          setPrice={setPrice}
          previosFractions={previosFractions}
          artistImage={artistImage}
          selCntPrevious={selCntPrevious}
          offeringId={offeringId}
          artWorkImage={artWorkImage}
          cellProps={cellProps}
          // selCnt={selCnt}
          // setSelCnt={setSelCnt}
          setCellProps={setCellProps}
          fractionSize={fractionSize}
          tableRowsCols={tableRowsCols}
        />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
