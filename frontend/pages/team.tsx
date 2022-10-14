// /* eslint-disable jsx-a11y/alt-text */
// import type { NextPage } from "next";
// import { Typography } from "../components/reusables/Atoms";
// import { Footer, Head, Navigation } from "../components/reusables/Components";
// import Card from "../components/Team/Card";
// import SmallCard from "../components/Team/SmallCard";
// import styles from "../styles/Team.module.scss";
// import cardData from "../teamDetails.json";
// const Home: NextPage = () => {
//   return (
//     <>
//       <Head title="Artfi | Team" />
//       <Navigation />

//       {/* <img src="/images/purple-gem-top.png" className={styles.diamond} /> */}
//       <div className={styles.container}>
//         <Typography color="white" variant="heading" extraClass={styles.title}>
//           Our Team
//         </Typography>
//         <div className={styles.cardHolder}>
//           {cardData.map(
//             (card, index) => card.top && <Card key={index} {...card} />
//           )}
//         </div>
//         {/* <div className={styles.cardHolder}>
//           {cardData.map(
//             (card, index) =>
//               !card.top && !card.advisor && <SmallCard key={index} {...card} />
//           )}
//         </div> */}
//         <Typography color="white" variant="heading" extraClass={styles.title}>
//           Our Patrons
//         </Typography>
//         <div className={styles.cardHolder}>
//           {cardData.map(
//             (card, index) => card.patron && <Card key={index} {...card} />
//           )}
//         </div>
//         <Typography color="white" variant="heading" extraClass={styles.title}>
//           Our Advisors
//         </Typography>
//         <div className={styles.cardHolder}>
//           {cardData.map(
//             (card, index) => card.advisor && <Card key={index} {...card} />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from "next";
import { Typography } from "../components/reusables/Atoms";
import { Footer, Head, Navigation } from "../components/reusables/Components";
import Card from "../components/Team/Card";
import SmallCard from "../components/Team/SmallCard";
import styles from "../styles/Team.module.scss";
import cardData from "../teamDetails.json";
const Home: NextPage = () => {
  return (
    <>
      <Head title="Artfi | Team" />
      <Navigation />
      
      {/* <img src="/images/purple-gem-top.png" className={styles.diamond} /> */}
      <div className={styles.container}>
        <div className={styles.innercontainer}>
        <Typography color="white" variant="heading" extraClass={styles.title2}>
          Our Team
        </Typography><br/>
       
        <div className={styles.cardHolder} >
       
          {cardData.map(
            (card, index) => card.top && <Card key={index} {...card} />
          )}
       
        </div>
        
        </div>
        {/* <div className={styles.cardHolder}>
          {cardData.map(
            (card, index) =>
              !card.top && !card.advisor && <SmallCard key={index} {...card} />
          )}
        </div> */}
        <Typography color="white" variant="heading" extraClass={styles.title}>
          Our Patrons
        </Typography>
        <div className={styles.cardHolder2}>
          {cardData.map(
            (card, index) => card.patron && <Card key={index} {...card} />
          )}
        </div>
        <Typography color="white" variant="heading" extraClass={styles.title}>
          Our Advisors
        </Typography>
        <div className={styles.cardHolder2}>
          {cardData.map(
            (card, index) => card.advisor && <Card key={index} {...card} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
