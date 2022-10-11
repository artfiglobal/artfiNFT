import { useState } from "react";
import { Landing } from "../components/Home2";
import { Container } from "../components/reusables2/Atoms";
import { Footer, Head, Navigation } from "../components/reusables2/Components";
import styles from "../styles/Home.module.scss";

export default function WhitelistLanding() {
  const [likes, setLikes] = useState(0);

  return (
    <div className={styles.home}>
      <Head title="Artfi" />
      <Navigation />
      <main className={styles.main}>
        <Landing likes={likes} />
      </main>
      <Footer />
    </div>
  );
}
