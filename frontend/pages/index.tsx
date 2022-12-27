import type { NextPage } from "next";
import { useState,useEffect } from "react";
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

export async function getStaticProps() {
  const data = await fetchFeaturedInDate();
  const offerData = await offeringData();
  return {
    props: {
      data,
      offerData,
    },
  };
}

const Home: NextPage<GetStaticProps> = (props: any) => {
  //isopen state
  console.log(props, "offering");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>()
  const [offerings, setOfferings] = useState<any>([])
  useEffect(() => {
   getOffering()
  }, [])
  const getOffering = async()=>{
    const items = await fetchFeaturedInDate();
    console.log(items,"item")
    setData(items)
  const offerData = await offeringData();
  console.log(offerData,"off")

  setOfferings(offerData)
  }
  return (
    <div className={styles.container}>
      <Head title="Artfi" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {isOpen && (
        <Modal referralCode={""} setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <Navigation />

      <main className={styles.main}>
        <div>
          <Landing
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            referralCode={""}
            offering={offerings}
          />
        </div>
        <Whitelist setIsOpen={setIsOpen} isOpen={isOpen} referralCode={""} />

        <Featured data={data} />
      </main>
      <Toaster />
      {/* <Footer display="none" /> */}
      <Footer />
    </div>
  );
};

export default Home;
