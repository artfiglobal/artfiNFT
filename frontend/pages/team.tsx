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
import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Typography } from "../components/reusables/Atoms";
import { Footer, Head, Navigation } from "../components/reusables/Components";
import Card from "../components/Team/Card";
import SmallCard from "../components/Team/SmallCard";
import { fetchTeamDate } from "../lib/apis/teamData";
import styles from "../styles/Team.module.scss";
import cardData from "../teamDetails.json";

// export async function getStaticProps() {
//   const data = await fetchTeamDate();
//   return {
//     props: {
//       data,
//     },
//   };
// }

interface Props {
  // props: {
  data: {
    medialogo: string;
    mediaurl: string;
    IsActive: boolean;
    createdAt: string;
    mediatitle: string;
    _id: string;
    __v: number;
  }[];
  // };
  isWhite: boolean;
}

const Home: NextPage = () => {
  // console.log(props);
  const [team, setTeam] = useState<[] | undefined>();
  useEffect(() => {
    const fetchFaqs = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/team/getallteam`
      );
      const data = await response.data.list;
      setTeam(data);
      console.log(data, "team data");
    };
    fetchFaqs();
  }, []);
  return (
    <>
      <Head title="Artfi | Team" />
      <Navigation />

      {/* <img src="/images/purple-gem-top.png" className={styles.diamond} /> */}
      <div className={styles.container}>
        <div className={styles.innercontainer}>
          <Typography
            color="white"
            variant="heading"
            extraClass={styles.title2}
          >
            Our Team
          </Typography>
          <br />
          <div className={styles.cardHolder}>
            {team &&
              team?.length > 0 &&
              team?.map(
                (card: any, index: any) =>
                  card.type === "coreTeam" && <Card key={index} {...card} />
              )}
          </div>
        </div>
        <Typography color="white" variant="heading" extraClass={styles.title}>
          Our Patrons
        </Typography>
        <div className={styles.cardHolder}>
          {team?.map(
            (card: any, index: any) =>
              card.type === "patrons" && <Card key={index} {...card} />
          )}
        </div>
        <Typography color="white" variant="heading" extraClass={styles.title}>
          Our Advisors
        </Typography>
        <div className={styles.cardHolder}>
          {team?.map(
            (card: any, index: any) =>
              card.type === "advisors" && <Card key={index} {...card} />
          )}
        </div>
      </div>
      <Footer display="" />
    </>
  );
};

export default Home;
