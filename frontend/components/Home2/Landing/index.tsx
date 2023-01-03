/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect, useCallback, useRef } from "react";
import { Container, Typography, Button } from "../../reusables2/Atoms";
import ButtonView from "@mui/material/Button";
import { ArtInfo, DetailCard, LandingCarousel, OrderForm, Timer } from "..";
import { Tabs, Accordion, Modal } from "@mantine/core";
import { FiHeart } from "react-icons/fi";
import style from "./Landing.module.scss";
import { ethers } from "ethers";
import axios from "axios";
import Link from "next/link";
import { FormDataInterface } from "../../../types";
import Timer2 from "../Timer2";
type LandingProps = {
  likes: number;
};

import { web3Modal } from "../../../lib/Web3Modal";
import { web3Context } from "../../../context";
// import web3Context from "../../../context/Web3Context";
import { Web3DataInterface } from "../../../context/types";
import APIContext from "../../../context/APIContext";
import Web3Context from "../../../context/Web3Context";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Avatar, ButtonBase, Divider, dividerClasses } from "@mui/material";
import { AuthProvider } from "@arcana/auth";

import metamask from "../../../public/metamask.png";
import arcana from "../../../public/arcana.png";
import RightArrow from "../../../public/Icons/Combined-Shape.svg";
import SelectFractionNFTs from "../../SelectableGroup/SelectImages";
import {
  createSelectable,
  SelectAll,
  DeselectAll,
} from "react-selectable-fast";
import { FaBlackTie } from "react-icons/fa";
import { useRouter } from "next/router";

import { abi as ArtfiWhitelistABI } from "../../../abi/ArtfiWhitelist.json";
import { ARTFIWHITELIST, RPCURL, USDCADDR } from "../../../config";
import PriceCard from "../../reusables/Components/PriceCard/PriceCard";

const useKey = (setPressKey: any) => {
  useEffect(() => {
    function handle(event: any) {
      if (event.ctrlKey || event.metaKey) {
        // macKeys
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
  }, []);
};

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
}: // selCnt,
// setSelCnt,
LandingProps | any): JSX.Element => {
  //ref//
  const initialPrice = offerWhitelist.price;
  // console.log(initialPrice, "offerWhitelist from landing");
  let makeItWork: any = useRef(null);
  useEffect(() => {
    makeItWork.currrent;
  }, []);
  // likes = 10;
  const [opened, setOpened] = useState(false);
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  // const [activeIcon, setActiveIcon] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [unitValueTotal, setUnitValueTotal] = useState(10000);
  const [pressKey, setPressKey] = useState(true);
  const [coords, setCoords] = useState([0, 0]);
  const [isShown, setIsShown] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  // const [cellProps, setCellProps] = useState([]);
  const [selCnt, setSelCnt] = useState(0);
  const [singleImage, setSingleImage] = useState();
  const [innerWidth, setInnerWidth] = useState(0);
  const [coordinates, setCoordinates] = useState();
  const [initialCellProps, setInitialCellProps] = useState([]);
  // console.log(cellProps);
  // const [selCnt, setSelCnt] = useState<any>(0);
  const router = useRouter();
  // console.log(selCnt);
  // const ftactionsNo = offerWhitelist.FractionNumber;
  // console.log(offerWhitelist);
  useEffect(() => {
    const width = globalThis?.window?.innerWidth;
    // const width = globalThis?.window?.innerHeight;

    setInnerWidth(width);
  }, [innerWidth]);
  // console.log(innerWidth);
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
  const [tabActiveButton, setTabActiveButton] = useState(true);
  const { web3Data, setWeb3Data, connectWallet, walletAddress, signer } =
    useContext(Web3Context);

  const web3Provider = new ethers.providers.JsonRpcProvider(RPCURL);
  const artfiWhitelistContract = new ethers.Contract(
    ARTFIWHITELIST,
    ArtfiWhitelistABI,
    web3Provider
  );

  useKey(setPressKey);
  const handleSelectionClear = (items: any) => {
    // items?.map((item: any, index: any) => {
    //   console.log(item);
    //   // return (item.state.isSelected = false);
    // });
    // setSelectedItems([]);
  };
  // console.log(pressKey);
  const disconnectWallet = () => {
    setWeb3Data(null);
    web3Modal.clearCachedProvider();
  };
  useEffect(() => {
    setFormData((prev) => ({ ...prev, address: walletAddress }));
  }, [walletAddress]);

  useEffect(() => {
    setUnitValueTotal(10000 - formData.amount);
  }, [formData]);
  const completePurchase = async () => {
    const whitelistId = offerWhitelist._id;

    console.log(previosFractions, "previosFractions");

    let sendSelected: any = previosFractions.map((item: any, index: any) => {
      // console.log(item, "item");
      return parseInt(item);
    });

    cellProps.map((item: any, index: any) => {
      if (item === "selected") {
        sendSelected.push(index);
      }
    });
    console.log(sendSelected);
    // console.log(selCntPrevious + selCnt, "summation");
    var form = new FormData();
    for (let i = 0; i < sendSelected.length; i++) {
      form.append("fractionInfo[]", sendSelected[i]);
    }
    form.append("whitelistId", offeringId);
    form.append("walletAddress", walletAddress);
    if (selCntPrevious + selCnt <= 50) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/fraction/updatefraction`,
          form,
          { headers: { "Content-Type": "application/json" } }
        );

        console.log(response.data.signature);
        if (response.status == 200 && response.data.signature) {
          const chkPrice = ethers.utils.parseEther(
            (parseFloat(offerWhitelist?.price) * sendSelected.length).toString()
          );

          const tx = await artfiWhitelistContract
            .connect(signer)
            .doWhitelist(
              USDCADDR,
              chkPrice,
              ethers.utils.formatBytes32String(offeringId),
              sendSelected.join(","),
              response.data.signature
            );
          if (tx) await tx.wait();
        }
      } catch (err) {
        console.log(err);
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
  // useEffect(() => {
  //   connectWallet();
  //   if (web3Data?.provider?.on) {
  //     getData();
  //   }
  // }, [web3Data]);
  const connectArcana = async () => {
    const auth = new AuthProvider(`D3681ee2cE02bE847c0227d2a85867a2Dd4C604D`);

    try {
      await auth.init({
        //appMode can be 0, 1, or 2 depending upon the wallet UI mode that needs to be configured
        // no ui, widget, full UI modes.
        appMode: 1,
        position: "right",
      });

      // const arcanaProvider = await auth.loginWithSocial('google')
      // const provider = new ethers.providers.Web3Provider(arcanaProvider)

      // const blockNumber = await provider.getBlockNumber()
      // console.log(blockNumber);
    } catch (e) {
      console.log(e);
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
          top: coords[1] - 250,
          left: coords[0] < 84 ? coords[0] - 20 : coords[0] - 110,
        }}
        className={style.popUpMenu}
      >
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
                  Sold!
                </Typography>
              )
            )}

            {/* <Typography variant="popup" color={"mauve"}>
              {cellProps[singleImage - 1] === ""
                ? "Available"
                : cellProps[singleImage - 1] === "selected"
                ? "Selected"
                : "Not Available"}
            </Typography> */}
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
                {/* AF 22 */}
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
        {/* <div className={style.landingCarousel}>
          <LandingCarousel />
        </div> */}
        <div className={style.landingTop}>
          <div className={style.likes}>
            <button className={style.timer}>
              <img src="Publiced/time.svg" />
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
          {isShown && (
            <ToolTipCard singleImage={singleImage} coordinates={coordinates} />
          )}
          <TransformWrapper
            // initialPositionX={270}
            centerOnInit={true}
            panning={{ disabled: pressKey }}
          >
            <TransformComponent>
              <SelectFractionNFTs
                isShown={isShown}
                // columnCnt={columnCnt}
                // rowCnt={rowCnt}
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
                handleSelectionClear={handleSelectionClear}
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
                Sold
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
            {/* <div style={{ display: "flex", alignItems: "center", width: "90%" }}>
            <button className={style.timer1}>
              <img src="Publiced/time.svg" width="16px" height="16px" />
              <label>12h:43m:10s</label>
            </button>
            <div className={style.shareandlike1}>
              <Image
                src="/Icons/hearts.svg"
                alt="like"
                width="68px"
                height="68px"
              />
              <Image
                src="/Icons/share.svg"
                alt="like"
                width="68px"
                height="68px"
              />
            </div>
            </div> */}
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
            {/* <Tabs defaultValue="details" className={style.landingTabs}>
            <Tabs.List className={style.tabList}>
              <Tabs.Tab
                value="details"
                className={style.tabValue}
                style={
                  tabActiveButton
                    ? { background: "#F5F1FE" }
                    : { background: "white" }
                }
                onClick={() => setTabActiveButton(true)}
              >
                Details
              </Tabs.Tab>
              <Tabs.Tab
                value="status"
                style={
                  !tabActiveButton
                    ? { background: "#F5F1FE" }
                    : { background: "white" }
                }
                onClick={() => setTabActiveButton(false)}
                className={style.tabValue}
              >
                {isWhiteListed ? "Ownership Status" : "Get Whitelisted"}
              </Tabs.Tab>
              <Timer seconds={40000} />
            </Tabs.List>

            <Tabs.Panel value="details" className={style.tabPanel}></Tabs.Panel>

            <Tabs.Panel value="status" className={style.tabPanel}>
              {walletAddress ? (
                !isWhiteListed ? (
                  <form
                    onSubmit={handleAddWhitelist}
                    className={style.tabContent}
                  >
                    <div className={style.contentHeader}>
                      <img src="/images/like.png" alt="" />
                      <Typography variant="heading" color={"black"}>
                        Order Summary
                      </Typography>
                    </div>
                    <div className={style.contentData}>
                      <Accordion
                        variant="contained"
                        radius="md"
                        chevronSize={26}
                        defaultValue="customization"
                        className={style.accordion}
                      >
                        <Accordion.Item
                          value="customization"
                          className={style.accordionItem}
                        >
                          <Accordion.Control className={style.accordionControl}>
                            Important points
                          </Accordion.Control>
                          <Accordion.Panel className={style.accordionPanel}>
                            <ul>
                              <li>Whitelist up to 50 Artfi NFTs per wallet.</li>
                              <li>
                                Please check your email Inbox / Junk section for
                                the confirmation email after the whitelisting.
                              </li>
                              <li>
                                We will notify you to claim your NFTs one week
                                before the Public Mint.
                              </li>
                              <li>
                                If you do not claim your NFTs, we will offer
                                them to the public through our public mint
                                offering.
                              </li>
                            </ul>
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <OrderForm
                      formData={formData}
                      setFormData={setFormData}
                      unitValueTotal={10000}
                      initialPrice={1}
                    ></OrderForm>
                    <Button
                      type="submit"
                      variant="primary"
                      style={{ padding: "15px 30px" }}
                    >
                      Whitelist
                    </Button>
                  </form>
                ) : (
                  <h1>Congratulations, You have Successfully Whitelisted</h1>
                )
              ) : (
                <div className={style.tabContent}>
                  <div className={style.contentHeader}>
                    <Typography variant="heading" color={"black"}>
                      Whitelist your ArtFi NFT
                    </Typography>
                  </div>
                  <div className={style.contentInfo}>
                    <Typography variant="subheading" color={"grey"}>
                      Connect your wallet and purchase your Artfi NFTs.
                    </Typography>
                  </div>
                  <div className={style.contentBtns}>
                    <Button
                      variant="primary"
                      onClick={async () => {
                        await connectWallet();
                        setWallet(true);
                       
                      }}
                    >
                      Connect your wallet to whitelist
                    </Button>
                    <Button
                      variant="primary"
                      style={{
                        background: "white",
                        color: "black",
                        border: "1px solid #1E1E1E",
                        boxShadow: "0",
                      }}
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
                      Create a new wallet
                    </Button>
                    <Typography variant="subheading" color={"grey"}>
                      OR
                    </Typography>
                    <Button variant="secondary">Create a new account</Button>
                  </div>
                  <label>or</label>
                  <Image src="/Icons/arcana.svg" width="223px" height="68px" />
                  <Button
                    variant="primary"
                    style={{
                      background: "white",
                      color: "black",
                      border: "1px solid #1E1E1E",
                      boxShadow: "0",
                    }}
                    onClick={async () => {
                      await connectArcana();
                    }}
                  >
                    Connect Arcana
                  </Button>
                </div>
              )}
            </Tabs.Panel>
          </Tabs> */}
          </div>

          {/* <div className={style.landingCard}>
            <h3>Get Whitelisted</h3>
            <p>Connect your wallet to whitelist</p>
          </div> */}
          <div className={style.bottomRight}>
            {walletAddress ? (
              // <form onSubmit={handleAddWhitelist} className={style.tabContent}>
              //   <div className={style.contentHeader}>
              //     <img src="/images/like.png" alt="" />
              //     <Typography variant="heading" color={"black"}>
              //       Order Summary
              //     </Typography>
              //   </div>
              //   <br />
              //   <div className={style.contentData}>
              //     <Accordion
              //       variant="contained"
              //       radius="md"
              //       chevronSize={26}
              //       defaultValue="customization"
              //       className={style.accordion}
              //     >
              //       <Accordion.Item
              //         value="customization"
              //         className={style.accordionItem}
              //       >
              //         <Accordion.Control className={style.accordionControl}>
              //           Important points
              //         </Accordion.Control>
              //         <Accordion.Panel className={style.accordionPanel}>
              //           <ul>
              //             <li>Whitelist up to 50 Artfi NFTs per wallet.</li>
              //             <li>
              //               Please check your email Inbox / Junk section for the
              //               confirmation email after the whitelisting.
              //             </li>
              //             <li>
              //               We will notify you to claim your NFTs one week
              //               before the Public Mint.
              //             </li>
              //             <li>
              //               If you do not claim your NFTs, we will offer them to
              //               the public through our public mint offering.
              //             </li>
              //           </ul>
              //         </Accordion.Panel>
              //       </Accordion.Item>
              //     </Accordion>
              //   </div>
              //   <OrderForm
              //     formData={formData}
              //     setFormData={setFormData}
              //     unitValueTotal={10000}
              //     // initialPrice={initialPrice}
              //     selCnt={selCnt}
              //     setPrice={setPrice}
              //     // selCntPrevious={selCntPrevious}
              //     price={price}
              //   ></OrderForm>
              //   <Button
              //     type="submit"
              //     disabled={cellProps.length === 0}
              //     variant="primary"
              //     style={{ padding: "15px 30px", marginTop: "10px" }}
              //     onClick={completePurchase}
              //   >
              //     Whitelist
              //   </Button>
              // </form>
              <PriceCard
                formData={formData}
                setFormData={setFormData}
                completePurchase={completePurchase}
                //     unitValueTotal={10000}
                //     // initialPrice={initialPrice}
                selCnt={selCnt}
                setPrice={setPrice}
                // selCntPrevious={selCntPrevious}
                price={price}
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
                  {/* <Button
                 variant="connect"
                 style={{
                   backgroundColor: "white",
                   color: "#4527B3",
                   width: "100%",
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
                </Button> */}
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
                    // variant="primary"
                    // style={{
                    //   width: "190px",
                    //   fontSize: "16px",
                    //   padding: "10px 16.5px",
                    // }}
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
                      // connectWallet().then(() => {
                      //   getData();
                      //   setWallet(true);
                      //   console.log("hello");
                      // });
                    }}
                  >
                    Create a new wallet
                  </Button>
                  <Typography variant="smallest" color={"white"}>
                    OR
                  </Typography>
                </div>
                <a
                  href="https://dashboard.beta.arcana.network/login"
                  className={style.connectArcana}
                  // onClick={async () => {
                  //   await connectWallet();
                  //   setWallet(true);
                  // }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <Image src={arcana} alt="" />
                  </div>
                  <Typography variant="small" color={"black"}>
                    Connect using
                    <br />
                    social accounts
                  </Typography>
                  {/* <Typography variant="smallest" color={"black"}></Typography> */}
                </a>
                {/* <Image src="/Icons/arcana.svg" width="223px" height="68px" /> */}
                {/* <Button
              variant="primary"
              style={{
                background: "white",
                color: "black",
                border: "1px solid #1E1E1E",
                boxShadow: "0",
              }}
              onClick={async () => {
                await connectArcana();
              }}
            >
              Connect Arcana
            </Button> */}
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
