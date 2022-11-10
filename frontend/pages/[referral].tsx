import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
import { Footer, Head, Navigation } from "../components/reusables/Components";
import Modal from "../components/reusables/Components/Modal";
import styles from "../styles/Home.module.scss";

const WaitList: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  const { referral } = router.query;
  const [referralCode, setReferralCode] = useState<
    string | string[] | undefined
  >("");

  useEffect(() => {
    console.log(referralCode);
    console.log(referral);
    setReferralCode(referral);
  }, [referral, referralCode]);

  return (
    <div className={styles.container}>
      <Head title="Artfi" />
      <Navigation />
      {
        isOpen &&
        <Modal referralCode={referralCode} setIsOpen={setIsOpen} isOpen={isOpen} />
      }
      <main className={styles.main}>
        <Landing setIsOpen={setIsOpen} isOpen={isOpen} referralCode={referralCode} />
        <Whitelist isOpen={isOpen} setIsOpen={setIsOpen} referralCode={referralCode} />
        <Discover />
        <HowItWorks />
        <Market />
        <Offering />
        <Benefits />
        <Foundation />
        <Roadmap />
        <Objectives />
      </main>

      <Footer display=""/>
    </div>
  );
};

export default WaitList;
