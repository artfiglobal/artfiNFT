import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import {
  Benefits,
  Discover,
  Foundation,
  HowItWorks,
  Landing,
  Market,
  Objectives,
  Offering,
  Roadmap,
  Whitelist,
} from "../components/Home";
import toast, { Toaster } from "react-hot-toast";
import { offeringData } from "../lib/apis/offeringData";
import { Head, Navigation } from "../components/reusables/Components";
import { Footer } from "../components/reusables/Components/Footer2";

import Modal from "../components/reusables/Components/Modal";
import styles from "../styles/Home.module.scss";
import Featured from "../components/Home/Featured/Index";
import { fetchFeaturedInDate } from "../lib/apis/featuredInData";
import GetStaticProps from "../components/Home/Featured/types";
import Web3Context from "../context/Web3Context";

export async function getStaticProps() {
  const data = await fetchFeaturedInDate();
  const offerData = await offeringData();
  return {
    props: {
      data,
      offerData,
    },
    revalidate: 2,
  };
}

const Home: NextPage<GetStaticProps> = (props: any) => {
  const {
    // web3Data,
    // setWeb3Data,
    // connectWallet,
    walletAddress,
    // disconnectWallet,
  } = useContext(Web3Context);
  //isopen state
  // console.log(props, "offering");
  useEffect(() => {
    // console.log(walletAddress);
    // useEffect(() => {
    localStorage.setItem("walletAddress", JSON.stringify(walletAddress));
    // }, [items]);
    // if (walletAddress) {
    //   const addressFormatter = () => {
    //     const address =
    //       walletAddress.slice(0, 6) + "..." + walletAddress.slice(37, 42);
    //     setFormattedAddress(address);
    //   };
    //   addressFormatter();
    // }
  }, [walletAddress]);
console.log(props.offerData.trueOfferings[0]._id,"offerDataid")
console.log(props.offerData.trueOfferings[0].artistId,"offerDataartist")

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.container} style={{ overflow: "hidden" }}>
      <Head title="Artfi" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {isOpen && (
        <Modal referralCode={""} UserRedirectFrom="Waitlist-Now" offeringId={props.offerData.trueOfferings[0]._id} artistId={props.offerData.trueOfferings[0].artistId} setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <Navigation />

      <main className={styles.main}>
        <div>
          <Landing
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            referralCode={""}
            offerData={props.offerData}
          />
        </div>
        <Whitelist setIsOpen={setIsOpen}  isOpen={isOpen} referralCode={""} />

        <Featured data={props.data} />
      </main>
      <Toaster />
      {/* <Footer display="none" /> */}
      <Footer />
    </div>
  );
};

export default Home;
