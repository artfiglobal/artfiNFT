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

import { Footer, Head, Navigation } from "../components/reusables/Components";
import Modal from "../components/reusables/Components/Modal";
import styles from "../styles/Home.module.scss";
import Featured from "../components/Home/Featured/Index";
import { fetchFeaturedInDate } from "../lib/apis/featuredInData";

export async function getStaticProps() {
  const data = await fetchFeaturedInDate();
  return {
    props: {
      data,
    },
  };
}

const Home: NextPage = (props: any) => {
  //isopen state
  console.log(props.data);

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
          <Landing setIsOpen={setIsOpen} isOpen={isOpen} referralCode={""} />
        </div>
        <Whitelist setIsOpen={setIsOpen} isOpen={isOpen} referralCode={""} />

        <Featured featuredData={props.data} isWhite={false} />
      </main>
      <Toaster />
      <Footer display="none" />
    </div>
  );
};

export default Home;
