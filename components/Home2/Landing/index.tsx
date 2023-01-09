/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect, useRef } from "react";
import ButtonView from "@mui/material/Button";
import { Modal } from "@mantine/core";
import { ethers, BigNumber } from "ethers";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";
import { AuthProvider, CHAIN } from "@arcana/auth";

import Timer2 from "../Timer2";
import { ArtInfo, DetailCard } from "..";
import { FormDataInterface } from "../../../types";
import { Container, Typography, Button } from "../../reusables2/Atoms";
import style from "./Landing.module.scss";

import Web3Context from "../../../context/Web3Context";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import metamask from "../../../public/metamask.png";
import arcana from "../../../public/arcana.png";
import RightArrow from "../../../public/Icons/Combined-Shape.svg";
import SelectFractionNFTs from "../../SelectableGroup/SelectImages";
import PriceCard from "../../reusables/Components/PriceCard/PriceCard";
import LoaderScreen from "../../reusables2/CircularProgress/CircularProgress";

import { ARTFIWHITELIST, RPCURL } from "../../../config";
import { abi as ArtfiWhitelistABI } from "../../../abi/ArtfiWhitelist.json";
import ERC20ABI from "../../../abi/ERC20.json";

type LandingProps = {
  likes: number;
};

const web3Provider = new ethers.providers.JsonRpcProvider(RPCURL);
const artfiWhitelistContract = new ethers.Contract(
  ARTFIWHITELIST,
  ArtfiWhitelistABI,
  web3Provider
);

const useKey = (setPressKey: any) => {
  useEffect(() => {
    function handle(event: any) {
      if (event.ctrlKey || event.metaKey) {
        setPressKey(false);
      }
    }
    function handle2(event: any) {
      if (!event.ctrlKey || !event.metaKey) {
        setPressKey(true);
      }
    }
    document.addEventListener("keydown", handle);
    document.addEventListener("keyup", handle2);

    return () => {
      document.removeEventListener("keydown", handle);
      document.addEventListener("keyup", handle2);
    };
  }, [setPressKey]);
};

let arcanaProvider: any = null;

type offerWhitelistTypes = {
  FractionNumber?: number;
  Title?: string;
  artistName?: string;
  authencity?: string;
  columnNumber?: number;
  description?: string;
  factSheet?: string;
  height?: number;
  imageOfArtWork?: string;
  medium?: string;
  price?: number;
  provenence?: string;
  rowNumber?: number;
  signature?: string;
  width?: number;
  year?: number;
  _id?: string;
};

export const Landing = ({
  offerWhitelist,
  previosFractions,
  likes,
  offerUnveiling,
  artWorkImage,
  artistId,
  artistImage,
  // rowCnt,
  // columnCnt,
  tableRowsCols,
  fractionSize,
  setCellProps,
  cellProps,
  addDetailsPage,
  whatYouWillGet,
  offeringId,
  selCntPrevious,
  price,
  setPrice,
  setOpen,
}:

LandingProps | any): JSX.Element => {
  const initialPrice = offerWhitelist.price;
  let makeItWork: any = useRef(null);
  useEffect(() => {
    makeItWork.currrent;
  }, []);
  
  const [opened, setOpened] = useState(false);
  const [, setIsWhiteListed] = useState(false);
  const [confirmPurchase, setConfirmPurchase] = useState(false);
  const [, setWallet] = useState(false);
  const [, setUnitValueTotal] = useState(10000);
  const [pressKey, setPressKey] = useState(true);
  const [coords, setCoords] = useState([0, 0]);
  const [isShown, setIsShown] = useState(false);
  const [, setSelectedItems] = useState([]);
  const [selCnt, setSelCnt] = useState(0);
  const [singleImage, setSingleImage] = useState();
  const [innerWidth, setInnerWidth] = useState(0);
  const [emailAddress, setEmailAddress] = useState("");
  const [coordinates, setCoordinates] = useState();
  const [, setInitialCellProps] = useState([]);
  const [isArcanaLogin, setIsArcanaLogin] = useState(false);
  const [checkCurrency, setCheckCurrency] = useState("");
  const [showApprove, setShowApprove] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const width = globalThis?.window?.innerWidth;
    // const width = globalThis?.window?.innerHeight;

    setInnerWidth(width);
  }, [innerWidth]);

  const [formData, setFormData] = useState<FormDataInterface>({
    address: "",
    contractSigned: false,
    amount: 1,
    email: "",
    chain: "Matic",
    termsSignature: Date.now().toString(),
    selCnt,
  });

  const triggerClearButton = () => {
    const items = cellProps.map((item: any) => {
      return item === "selected"
        ? ""
        : item === "disable"
        ? "disable"
        : item === "" && "";
    });

    setSelCnt(0);
    setCellProps(items);
    // makeItWork.current.context.selectable.clearSelection();
  };
  
  const { connectWallet, walletAddress, signer } =
    useContext(Web3Context);

  useKey(setPressKey);
  useEffect(() => {
    setFormData((prev) => ({ ...prev, address: walletAddress }));
  }, [walletAddress]);

  useEffect(() => {
    setUnitValueTotal(10000 - formData.amount);
  }, [formData]);

  const handleCurrency = async (selToken: string) => {
    setCheckCurrency(selToken)
    if (selToken != ethers.constants.AddressZero) {
      const tokenContract = new ethers.Contract(
        selToken,
        ERC20ABI,
        web3Provider
      );

      const allowance = await tokenContract.allowance(
        walletAddress,
        ARTFIWHITELIST
      )

      if (BigNumber.from(allowance).lte(ethers.utils.parseEther("10000"))) {
        setShowApprove(true);
      }
    } else {
      setShowApprove(false)
    }
  }

  const doApprove = async () => {
    if (walletAddress && checkCurrency.length > 0) {
      setConfirmPurchase(true);
      const tokenContract = new ethers.Contract(
        checkCurrency,
        ERC20ABI,
        web3Provider
      );

      try {
        const tx = await tokenContract
          .connect(signer)
          .approve(
            ARTFIWHITELIST,
            ethers.utils.parseUnits("100000")
          );
        
        if (tx) {
          tx.wait().then(async function(receipt: any) {
            console.log(receipt)
            setShowApprove(false)
            setConfirmPurchase(false)
          }).catch(function (err1: any) {
            setConfirmPurchase(false);

            console.log(`approve error: ${err1}`)
            const reason = err1.reason.replace('execution reverted: ', '');
            alert(reason)
          });
        }
      } catch (err: any) {
        setConfirmPurchase(false);

        console.log(`approve error: ${err}`)
        const reason = err.reason.replace('execution reverted: ', '');
        alert(reason)
      }
    }
  }

  const completePurchase = async () => {
    let sendSelected: any = previosFractions.map((item: any, index: any) => {
      return parseInt(item);
    });

    cellProps.map((item: any, index: any) => {
      if (item === "selected") {
        sendSelected.push(index);
      }
    });
    
    let form = new FormData();
    for (let i = 0; i < sendSelected.length; i++) {
      form.append("fractionInfo[]", sendSelected[i]);
    }

    form.append("whitelistId", offeringId);
    form.append("walletAddress", walletAddress);

    if (selCntPrevious + selCnt <= 50) {
      try {
        setConfirmPurchase(true);

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/fraction/updatefraction`,
          form,
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.status == 200 && response.data.signature) {
          const chkPrice = ethers.utils.parseEther(
            (parseFloat(offerWhitelist?.price) * sendSelected.length).toString()
          );
          console.log("Arcana connected: ", isArcanaLogin);
          if (walletAddress && checkCurrency.length > 0) {
            const tx = await artfiWhitelistContract
              .connect(signer)
              .doWhitelist(
                checkCurrency,
                chkPrice,
                ethers.utils.formatBytes32String(offeringId),
                sendSelected.join(","),
                response.data.signature
            );
            
            if (tx) {
              tx.wait().then(async function(receipt: any) {
                setConfirmPurchase(false)
                setOpened(true)

                await axios.post(
                  `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/whitelist/send-email`,
                  { body: emailAddress }
                );
              }).catch(function (err1: any) {
                setConfirmPurchase(false)

                console.log(`whitelist error: ${err1}`)
                const reason = err1.reason.replace('execution reverted: ', '');
                alert(reason)
              });
            }
          } else if (isArcanaLogin) {
            const connected = await arcanaProvider.isLoggedIn();
            if (connected) {
              const arcanaUserInfo = await arcanaProvider.getUser();
              if (arcanaUserInfo) {
                const arcanaPublicKey = arcanaUserInfo.address;
                const hash = await arcanaProvider.provider.request({
                  method: "eth_sendTransaction",
                  params: [
                    {
                      from: arcanaPublicKey,
                      to: ARTFIWHITELIST,
                      value: 0,
                    },
                  ],
                });
                console.log({ hash });
              }
            }
          }
        }
      } catch (err: any) {
        setConfirmPurchase(false);

        console.log(`whitelist error: ${err}`)
        const reason = err.reason.replace('execution reverted: ', '');
        alert(reason)
      }
    } else {
      alert("sorry number of fractions exceeds the limit");
    }
  };

  const handleAddWhitelist = async (e: any) => {
    try {
      e.preventDefault();
      // console.log(process.env,"hii")
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getallheader`,
        formData
      );
      setOpened(true);
      setIsWhiteListed(true);
    } catch (error) {
      console.log({ error });
    }
  };

  const connectArcana = async () => {
    if (!arcanaProvider) {
      const auth = new AuthProvider(
        `${process.env.NEXT_PUBLIC_React_App_ARCANA_APP_ADDRESS}`,
        {
          position: "right", // defaults to right
          theme: "dark", // defaults to dark
          alwaysVisible: false,
          chainConfig: {
            chainId: CHAIN.POLYGON_MUMBAI_TESTNET,
            rpcUrl: RPCURL,
          },
        }
      );

      try {
        await auth.init();
        await auth.connect();
      } catch (e) {
        console.log("Arcana Error: ", e);
      }
      arcanaProvider = auth;

      setWallet(true);
      setIsArcanaLogin(true);
    } else {
    }
  };

  const removeItem = (item: any, index: any) => {
    cellProps.map((im: any, inx: any) => {
      if (index === inx) return (im = "");
    });
  };
  // console.log(coordinates, "coordinates");
  const ToolTipCard = ({ singleImage, coordinates }: any) => {
    return (
      <div
        style={{
          top: coords[1] - 570,
          left: coords[0] < 84 ? coords[0] - 20 : coords[0] - 110,
        }}
        className={style.popUpMenu}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "9999",
          }}
        ></div>
        <div className={style.popUpInnerContainer}>
          <div className={style.menuImage}>
            <img src="" alt="" />
            {cellProps[singleImage - 1] === "" ? (
              <Typography variant="popup" color={"mauve"}>
                Available
              </Typography>
            ) : cellProps[singleImage - 1] === "selected" ? (
              <Typography variant="popup" color="blue">
                Selected
              </Typography>
            ) : (
              cellProps[singleImage - 1] === "disable" && (
                <Typography variant="popup" color="red">
                  Not Available!
                </Typography>
              )
            )}
          </div>
          <div className={style.menuDetails}>
            <div>
              <small>FRACTION</small>
              <br />
              <Typography variant="popup2" color="black">
                #{singleImage} /{tableRowsCols.columnCnt * tableRowsCols.rowCnt}
              </Typography>
            </div>
            <div>
              <small>COORDINATES</small>
              <br />
              <Typography variant="popup2" color="black">
                {coordinates[0]}/{coordinates[1]}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container>
      {confirmPurchase && <LoaderScreen />}
      <div className={style.landing}>
        <Modal
          centered
          overlayColor="rgba(155, 155, 155, 0.5)"
          overlayBlur={3}
          opened={opened}
          onClose={() => setOpened(false)}
          withCloseButton={false}
          transition="scale"
          transitionDuration={600}
          transitionTimingFunction="ease"
        >
          Your Artfi NFT has been
          <br />
          <span>Successfully Whitelisted</span>
        </Modal>
        
        <div className={style.landingTop}>
          <div className={style.likes}>
            <button className={style.timer}>
              <img src="Publiced/time.svg" alt="time svg" />
              <Timer2 endDate={offerUnveiling?.endDate} />
              {/* <label>12h:43m:10s</label> */}
            </button>

            <div className={style.shareandlike}>
              <Image
                src="/Icons/hearts.svg"
                alt="like"
                width="44px"
                height="44px"
              />
              <Image
                src="/Icons/share.svg"
                alt="like"
                width="44px"
                height="44px"
              />
            </div>
          </div>
          <div className={style.contentHeader}>
            <h2>{offerWhitelist?.Title || "FranK"} </h2>
          </div>
          <ArtInfo
            artist={offerWhitelist?.artistName || "James"}
            price={offerWhitelist?.price || "300"}
            sheetName={offerWhitelist?.factSheet}
            artistImage={artistImage}
            artWorkImage={artWorkImage}
          />
        </div>
        <div className={style?.fractionImage}>
          <div
            style={{
              width: "fit-content",
              margin: "0 auto",
              marginBottom: "30px",
              marginTop: "44px",
            }}
          >
            <Typography variant="popup2" color={"black"}>
              Drag to select NFTs
            </Typography>
          </div>
          {singleImage && (
            <ToolTipCard singleImage={singleImage} coordinates={coordinates} />
          )}
          <TransformWrapper
            centerOnInit={true}
            panning={{ disabled: pressKey }}
          >
            <TransformComponent>
              <SelectFractionNFTs
                isShown={isShown}
                // columnCnt={columnCnt}
                // rowCnt={rowCnt}
                coordinates={coordinates}
                tableRowsCols={tableRowsCols}
                cellProps={cellProps}
                fractionSize={fractionSize}
                setCellProps={setCellProps}
                makeItWork={makeItWork}
                setOpen={setOpen}
                setSelectedItems={setSelectedItems}
                setIsShown={setIsShown}
                pressKey={pressKey}
                setCoords={setCoords}
                artWorkImage={artWorkImage}
                setInitialCellProps={setInitialCellProps}
                setSingleImage={setSingleImage}
                singleImage={singleImage}
                setCoordinates={setCoordinates}
                selCnt={selCnt}
                selCntPrevious={selCntPrevious}
                setSelCnt={setSelCnt}
              />
            </TransformComponent>
          </TransformWrapper>
          <div className={style.selectGroupFooter}>
            <div className={style.selectGroupFooterRight}>
              <div
                style={{
                  backgroundColor: "red",
                  width: "12px",
                  height: "12px",
                  marginRight: "10px",
                }}
              ></div>
              <Typography variant="popup" color={"black"}>
                Whitelisted
              </Typography>
            </div>
            <div className={style.selectGroupFooterRight}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "12px",
                  height: "12px",
                  border: "1px solid black",
                  marginRight: "10px",
                }}
              ></div>
              <Typography variant="popup" color={"black"}>
                Available
              </Typography>
            </div>
          </div>
        </div>

        {/* <div className={style.newEra}>
          {Array(1000)
            .fill(" ")
            .map((item, index) => {
              return <p></p>;
            })}
        </div> */}
        <div className={style.selectNFTs}>
          <div className={style.selectHeader}>
            <div>
              <Typography variant="bold" color={"black"}>
                Select NFTs
              </Typography>
              <Typography variant="small" color={"black"}>
                Upto 50
              </Typography>
            </div>
            <Button
              disabled={selCnt === 0}
              onClick={triggerClearButton}
              variant="clear"
            >
              Clear
            </Button>
          </div>
          <div className={style.NFTsFractions}>
            {cellProps.map((item: any, index: any) => {
              if (item === "selected") {
                return (
                  <Button
                    onClick={() => removeItem(item, index)}
                    variant="fractionBTN"
                    key={index}
                  >
                    #{index}
                  </Button>
                );
              }
            })}
            {/* {Array(10)
              .fill(" ")
              .map((item, index) => {
                return (
                  // <div className={style.singleFraction}>
                  // </div>
                  <Button variant="fractionBTN">#05</Button>
                );
              })} */}
          </div>
        </div>
        <div className={style.landingBottom}>
          <div className={style.landingDetails}>
            <div className={style.prf}>
              <Avatar
                src="/images/artist.png"
                alt="Artist profile"
                className={style.artistProfile}
              />
              <h6 style={{ display: "flex", gap: "5px" }}>
                <Link href="/artist-details" style={{ cursor: "pointer" }}>
                  vs gaitonde
                </Link>
                <img
                  alt="vector svg"
                  src="/Publiced/Vector.svg"
                  style={{ width: "16px", height: "16px" }}
                />
              </h6>
            </div>
            <div className={style.landingTabs}>
              <div className={style.tabPanel}>
                <div className={style.tabContent}>
                  <div className={style.contentInfo}>
                    <h6>Description</h6>
                    <p>{offerWhitelist?.description || "description"}</p>
                  </div>
                  <div className={style.contentCards}>
                    <DetailCard
                      url="osw"
                      title="Original Size"
                      content={
                        offerWhitelist?.width +
                        " cm" +
                        " x " +
                        offerWhitelist?.height +
                        " cm"
                      }
                    />
                    <DetailCard
                      url="siw"
                      title="signature"
                      content={offerWhitelist?.signature || "My Signature"}
                    />
                    <DetailCard
                      url="yew"
                      title="year"
                      content={offerWhitelist?.year || "2022"}
                    />
                    <DetailCard
                      url="mew"
                      title="medium"
                      content={offerWhitelist?.medium || "Medium"}
                    />
                    <DetailCard
                      url="low"
                      title="authenticity"
                      content={offerWhitelist?.provenence || "provenence"}
                    />
                    <DetailCard
                      url="perserve"
                      title="PROVENENCE"
                      content={offerWhitelist?.authencity || "authencity"}
                    />
                    {/* <DetailCard url="rew" title="Remaining " content="9999" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.bottomRight}>
            {walletAddress || isArcanaLogin ? (
              <PriceCard
                formData={formData}
                setFormData={setFormData}
                completePurchase={completePurchase}
                emailAddress={emailAddress}
                setEmailAddress={setEmailAddress}
                selCnt={selCnt}
                setPrice={setPrice}
                price={price}
                showApprove={showApprove}
                setCurrency={handleCurrency}
                doApprove={doApprove}
              />
            ) : (
              <div className={style.landingCard}>
                <div className={style.contentHeader}>
                  <Typography variant="newHeading" color={"black"}>
                    Get Whitelisted
                  </Typography>
                </div>
                {/* <div className={style.contentInfo}>
              Connect your wallet to whitelist
            </div> */}
                <Typography variant="light" color={"lightGray"}>
                  Connect your wallet to whitelist
                </Typography>
                <div className={style.contentBtns}>
                  <Button
                    variant="connect"
                    style={{
                      backgroundColor: "white",
                      color: "#4527B3",
                      width: "100%",
                      cursor: "pointer",
                      margin: "40px 0 16px 0 ",
                      border: "1px solid white",
                    }}
                    onClick={async () => {
                      await connectWallet();
                      setWallet(true);
                    }}
                  >
                    <div style={{ position: "absolute", left: "5px" }}>
                      <Image src={metamask} alt="" />
                    </div>
                    Connect your wallet
                  </Button>
                  <Button
                    variant="connect"
                    style={{
                      background: "transparent",
                      color: "white",
                      border: "1px solid white",
                    }}
                    onClick={async () => {
                      await connectWallet();
                      setWallet(true);
                    }}
                  >
                    Create a new wallet
                  </Button>
                  <Typography variant="smallest" color={"white"}>
                    OR
                  </Typography>
                </div>
                <a
                  // href="https://dashboard.beta.arcana.network/login"
                  className={style.connectArcana}
                  onClick={() => connectArcana()}
                >
                  <div style={{ marginRight: "20px" }}>
                    <Image src={arcana} alt="" />
                  </div>
                  <Typography variant="small" color={"black"}>
                    Connect using
                    <br />
                    social accounts
                  </Typography>
                </a>
              </div>
            )}
            {addDetailsPage && (
              <div className={style.get}>
                <div>
                  <h3 style={{ margin: "0" }}>
                    Know more about
                    <br />
                    the Artwork
                  </h3>
                </div>
                <div>
                  <Link href="/artwork-details">
                    <Image
                      style={{ cursor: "pointer" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            )}
            {whatYouWillGet && (
              <div className={style.get}>
                <div>
                  <h4>WHAT YOU’LL GET</h4>
                  <h3>Artfi NFT</h3>
                </div>
                <div>
                  <ButtonView
                    variant="outlined"
                    color="primary"
                    onClick={() => router.push("/nft-detail")}
                    style={{
                      color: "#4527B3",
                      border: "1px solid #4527B3",
                      fontWeight: 700,
                      fontSize: "16px",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      lineHeight: "20.16px",
                    }}
                  >
                    View
                  </ButtonView>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
