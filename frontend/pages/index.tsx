import { useState } from "react";
import { Landing } from "../components/Home";
import { Container } from "../components/reusables/Atoms";
import { Footer, Head, Navigation } from "../components/reusables/Components";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
