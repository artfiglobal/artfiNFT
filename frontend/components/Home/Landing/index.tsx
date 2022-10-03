/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect } from "react";
import { Container, Typography, Button } from "../../reusables/Atoms";
import {
  ArtInfo,
  DetailCard,
  LandingCarousel,
  OrderForm,
  Timer,
} from "../../Home";
import { Tabs, Accordion, Modal } from "@mantine/core";
import { FiHeart } from "react-icons/fi";
import { FormDataInterface } from "../../../types";
import style from "./Landing.module.scss";
import { ethers } from "ethers";

type LandingProps = {
  likes: number;
};

import { web3Modal } from "../../../lib/Web3Modal";
import { web3Context } from "../../../context/";
// import web3Context from "../../../context/Web3Context";
import { Web3DataInterface } from "../../../context/types";
import APIContext from "../../../context/APIContext";
import Web3Context from "../../../context/Web3Context";

export const Landing = ({ likes }: LandingProps): JSX.Element => {
  likes = 10;

  const [opened, setOpened] = useState(false);
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [unitValueTotal, setUnitValueTotal] = useState(10000);
  const [formData, setFormData] = useState<FormDataInterface>({
    address: "",
    contractSigned: false,
    amount: 1,
    email: "",
    chain: "Matic",
    termsSignature: Date.now().toString(),
  });

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
      const res = await API.post("/api/whitelist", formData);
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
        <div className={style.landingCarousel}>
          <LandingCarousel />
        </div>
        <div className={style.landingDetails}>
          <Tabs defaultValue="details" className={style.landingTabs}>
            <Tabs.List className={style.tabList}>
              <Tabs.Tab value="details" className={style.tabValue}>
                Details
              </Tabs.Tab>
              <Tabs.Tab value="status" className={style.tabValue}>
                {isWhiteListed ? "Ownership Status" : "Get Whitelisted"}
              </Tabs.Tab>
              <Timer seconds={40000} />
            </Tabs.List>

            <Tabs.Panel value="details" className={style.tabPanel}>
              <div className={style.tabContent}>
                <div className={style.contentHeader}>
                  <Typography variant="heading" color={"black"}>
                    The Cheers after Sermon
                  </Typography>
                  <div className={style.likes}>
                    <div
                      className={`${
                        activeIcon ? style.headIconActive : style.headIcon
                      }`}
                      onClick={() => setActiveIcon(!activeIcon)}
                    >
                      <FiHeart />
                    </div>
                    <Typography variant="subheading" color={"grey"}>
                      {likes}
                    </Typography>
                  </div>
                </div>
                <ArtInfo
                  artist="vs gaitonde"
                  price={1500}
                  sheetName="factsheet"
                />
                <div className={style.contentInfo}>
                  <Typography variant="body" color={"black"}>
                    Love is in the Air is a quintessential Banksy painting:
                    instantly recognizable, the image has become synonymous with
                    the artist&apos;s indelible graphic style, wry humor and
                    galvanizing political commentary.
                  </Typography>
                </div>
                <div className={style.contentCards}>
                  <DetailCard
                    url="size"
                    title="Original Size"
                    content="78 x 78 inch"
                  />
                  <DetailCard
                    url="sign"
                    title="signature"
                    content="Signed on the ownership."
                  />
                  <DetailCard url="year" title="year" content="2021" />
                  <DetailCard
                    url="medium"
                    title="medium"
                    content="Acrylic on canvas."
                  />
                  <DetailCard
                    url="authenticity"
                    title="authenticity"
                    content="Love is in the Air is accompanied by a..."
                  />
                  <DetailCard
                    url="prove"
                    title="PROVENENCE"
                    content="From the collection of Shahrukh Khan."
                  />
                  <DetailCard url="medium" title="Remaining " content="9999" />
                </div>
              </div>
            </Tabs.Panel>

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
                        Order Summary{" "}
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
                    <Button type="submit" variant="primary">
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

                        // connectWallet().then(() => {
                        //   getData();
                        //   setWallet(true);
                        //   console.log("hello");
                        // });
                      }}
                    >
                      Connect your wallet to whitelist
                    </Button>
                    {/* <Typography variant="subheading" color={"grey"}>
                      OR
                    </Typography> */}
                    {/* <Button variant="secondary">Create a new account</Button> */}
                  </div>
                </div>
              )}
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
