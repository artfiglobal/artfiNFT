import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigation } from "../components/reusables/Components";
import Typography from "../components/reusables2/Atoms/Typography2";
import { allArtists } from "../lib/apis/allArtists";
import style from "../styles/artists.module.scss";
import { Footer } from "../components/reusables/Components/Footer2";

import Image from "next/image";
import Link from "next/link";
// export async function getStaticProps() {
//   const data = await allArtists();
//   return {
//     props: {
//       data,
//     },
//     revalidate: 10,
//   };
// }

const Artists = (props: any) => {
  const [artistsList, setArtistsList] = useState<any>([]);
  useEffect(() => {
    const allArtists = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/artist/getallartist`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydGZpQGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWQiOiI2MzkxY2NiZTNmN2Q5Yjg4MWI3NTk2YjMiLCJpYXQiOjE2NzI0ODAzMjksImV4cCI6MTY3MjQ4NzUyOX0.SElevzl_ByzkYz5vENJ4qJ3JzEEP0wZ19uCewyjWFS0`,
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
        }
      );

      const data = await response.data.list;
      setArtistsList(data);
      console.log(data);
      return data;
    };
    allArtists();
  }, []);

  return (
    <div>
      <Navigation />
      <div className={style.artistsPage}>
        <Typography variant="subheading" color="black" fontWeight="bold">
          Our Artists
        </Typography>
        <div className={style.cardsContainer}>
          {artistsList.map((item: any, index: any) => (
            <Link href={`artist/${item._id}`}>
              <div className={style.artistCard}>
                <Typography
                  variant="smallHeading"
                  color="white"
                  fontWeight="superBold"
                >
                  {item.artistFirstName}
                </Typography>
                <Image
                  width={100}
                  height={100}
                  src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${item.artistImage}`}
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
