/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect, useCallback, useRef } from "react";
import { Container, Typography, Button } from "../../reusables2/Atoms";
import ButtonView from "@mui/material/Button";
import { ArtInfo, DetailCard, LandingCarousel, OrderForm, Timer } from "..";
import { Tabs, Accordion, Modal, StylesApiProvider } from "@mantine/core";
import { FiHeart } from "react-icons/fi";
import style from "./Landing.module.scss";
import { ethers } from "ethers";
import axios from "axios";
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
import Link from "next/link";
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

const useKey = (setPressKey: any) => {
  useEffect(() => {
    function handle(event: any) {
      if (event.ctrlKey) {
        setPressKey(false);
      }
    }
    function handle2(event: any) {
      if (!event.ctrlKey) {
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
  likes,
  offerUnveiling,
}: LandingProps | any): JSX.Element => {
  // console.log(offerWhitelist);
  // likes = 10;
  const [opened, setOpened] = useState(false);
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [unitValueTotal, setUnitValueTotal] = useState(10000);
  const [pressKey, setPressKey] = useState(true);
  const [coords, setCoords] = useState([0, 0]);
  const [isShown, setIsShown] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [formData, setFormData] = useState<FormDataInterface>({
    address: "",
    contractSigned: false,
    amount: 1,
    email: "",
    chain: "Matic",
    termsSignature: Date.now().toString(),
  });

  const [tabActiveButton, setTabActiveButton] = useState(true);
  const { web3Data, setWeb3Data, connectWallet, walletAddress } =
    useContext(Web3Context);
  // console.log({ web3Data });
  const { API, setWalletAddress } = useContext(APIContext);
  // const [web3Data, setWeb3Data] = useState<Web3DataInterface>();
  // const connectWallet = async () => {
  //   const instance = await web3Modal.connect();
  //   const provider = new ethers.providers.Web3Provider(instance);
  //   // const res = await provider.send("eth_requestAccounts", []);
  //   // console.log({ res });
  //   const signer = provider.getSigner();
  //   // console.log("Account:", await signer.getAddress());

  //   // console.log({ provider });
  //   console.log("Connect wallet ran");
  //   const newWeb3Data = { provider: provider, signer: signer };
  //   setWeb3Data(newWeb3Data);
  //   return newWeb3Data;
  // };
  // console.log({ connectWallet });

  useKey(setPressKey);
  const handleSelectionClear = (items: any) => {
    // console.log({ items }, "asdasd");
    // items?.map((item: any, index: any) => {
    //   console.log(item);
    //   // return (item.state.isSelected = false);
    // });
    // setSelectedItems([]);
    // console.log(items);
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

  const handleAddWhitelist = async (e: any) => {
    try {
      e.preventDefault();
      // console.log(process.env,"hii")
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/whitelist/`,
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
  // console.log(coords, "coords");
  const ToolTipCard = ({}) => {
    return (
      <div
        style={{
          top: coords[1] - 150,
          left: coords[0] < 84 ? coords[0] - 20 : coords[0] - 110,
        }}
        className={style.popUpMenu}
      >
        <div className={style.popUpInnerContainer}>
          <div className={style.menuImage}>
            <img src="" alt="" />
            <Typography variant="popup" color="mauve">
              Available
            </Typography>
          </div>
          <div className={style.menuDetails}>
            <div>
              <small>FRACTION</small>
              <br />
              <Typography variant="popup2" color="black">
                #5/1000
              </Typography>
            </div>
            <div>
              <small>COORDINATES</small>
              <br />
              <Typography variant="popup2" color="black">
                AF 22
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
              <Timer2 endDate={offerUnveiling.endDate} />
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
            <h2>{offerWhitelist.Title}</h2>
          </div>
          <ArtInfo
            artist={offerWhitelist.artistName}
            price={offerWhitelist.price}
            sheetName={offerWhitelist.factSheet}
          />
        </div>
        <div className={style.fractionImage}>
          {isShown && <ToolTipCard />}
          <TransformWrapper panning={{ disabled: pressKey }}>
            <TransformComponent>
              <SelectFractionNFTs
                isShown={isShown}
                setSelectedItems={setSelectedItems}
                setIsShown={setIsShown}
                setCoords={setCoords}
                handleSelectionClear={handleSelectionClear}
              />
            </TransformComponent>
          </TransformWrapper>
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
            <Button onClick={handleSelectionClear} variant="clear">
              Clear
            </Button>
          </div>
          <div className={style.NFTsFractions}>
            {selectedItems.map((item, index) => {
              return <Button variant="fractionBTN">#{index}</Button>;
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
                    <p>{offerWhitelist.description}</p>
                  </div>
                  <div className={style.contentCards}>
                    <DetailCard
                      url="osw"
                      title="Original Size"
                      content={
                        offerWhitelist.width + " x " + offerWhitelist.height
                      }
                    />
                    <DetailCard
                      url="siw"
                      title="signature"
                      content={offerWhitelist.signature}
                    />
                    <DetailCard
                      url="yew"
                      title="year"
                      content={offerWhitelist.year}
                    />
                    <DetailCard
                      url="mew"
                      title="medium"
                      content={offerWhitelist.medium}
                    />
                    <DetailCard
                      url="low"
                      title="authenticity"
                      content={offerWhitelist.provenence}
                    />
                    <DetailCard
                      url="perserve"
                      title="PROVENENCE"
                      content={offerWhitelist.authencity}
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

              <button
                className={style.connectArcana}
                onClick={async () => {
                  await connectWallet();
                  setWallet(true);
                }}
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
              </button>
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
            <div className={style.get}>
              <div>
                <h3 style={{ margin: "0" }}>
                  Know more about
                  <br />
                  the Artwork
                </h3>
              </div>
              <div>
                <Image src={RightArrow} alt="" />
                {/* <RightArrow /> */}
                {/* <ButtonView>View</ButtonView> */}
              </div>
            </div>
            <div className={style.get}>
              <div>
                <h4>WHAT YOU’LL GET</h4>
                <h3>Artfi NFT</h3>
              </div>
              <div>
                <ButtonView
                  variant="outlined"
                  color="primary"
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
