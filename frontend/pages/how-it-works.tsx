import Main from "../components/HowItWorks/Main";
import { Footer, Head, Navigation } from "../components/reusables/Components";

import styles from "../styles/HowItWorks.module.scss"


const Works = () => {
  return (
    <div className={styles.container}>
      <Head title="Artfi | How it Works" />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

export default Works;
