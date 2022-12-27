import type { NextPage } from "next";
import { useState } from "react";
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
    revalidate: 2,
  };
}

const Home: NextPage<GetStaticProps> = (props: any) => {
  //isopen state
  console.log(props, "offering");

  const [isOpen, setIsOpen] = useState<boolean>(false);
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
            offerData={props.offerData}
          />
        </div>
        <Whitelist setIsOpen={setIsOpen} isOpen={isOpen} referralCode={""} />

        <Featured data={props.data} />
      </main>
      <Toaster />
      {/* <Footer display="none" /> */}
      <Footer />
    </div>
  );
};

export default Home;
