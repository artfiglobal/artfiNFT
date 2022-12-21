import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CarouselComponent from "../../components/artist/Carousel/Carousel";
import Profile from "../../components/artist/Profile";
import { Navigation } from "../../components/reusables/Components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bio from "../../components/artist/Biography/Bio";
import Achievements from "../../components/artist/Achievements/Achievements";
import NavArtfiOnly from "../../components/reusables/Components/Navigation/NavArtfiOnly";
import { useRouter } from "next/router";
import { GeneralContext } from "../../context/GeneralState";
import axios from "axios";
import { fetchArtistFunction } from "../../lib/apis/fetchArtist";

export async function getStaticProps({ params }: any) {
  // const data = await fetchArtist();
  // const params = staticProps.params;
  console.log(params, "params");
  // const artist =  await fetchArtistFunction();

  // const data = await fetchArtistFunction(params.id);
  // return {
  //   props: {
  //     data,
  //   },
  // };
  // const fetchArtist = async () => {
  //   const response = await axios.get(
  //     `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/artist/getartist/${params}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE2YjdhZmM4ZDk3ZGMzZWYyZjU4IiwiaWF0IjoxNjcwODE2MDczLCJleHAiOjE2NzM0MDgwNzN9.850__kq6IrHdiqa3J43BL1bN_w3ZLwQOSdmnH4Cokys`,
  //         "Content-Type": "application/json",
  //         "Content-Length": "<calculated when request is sent>",
  //       },
  //     }
  // );
  // console.log(response);
  // // return response;
  // };
  // const data = fetchArtist();

  // return {
  //   props: {
  //     data,
  //   },
  // };
}
export async function getStaticPaths() {
  // const coffeeStoresData = await fetchCoffeeStores();
  // const artist =  await fetchArtistFunction();
  // const paths = coffeeStoresData.map((coffeeStore) => {
  //   return {
  //     params: {
  //       id: coffeeStore.id,
  //     },
  //   };
  // });
  // return {
  //   paths,
  //   fallback: true,
  // };
}
const artistDetails = (props: any) => {
  // console.log(props, "this is the data");
  // const { artistId } = useContext(GeneralContext);
  // const [artistDetails, setArtistDetails] = useState({});
  // useEffect(() => {
  //   // console.log(artistId, "this should be artist Id");
  //   const fetchArtist = async () => {
  //     try {
  //       //${process.env.NEXT_PUBLIC_React_App_Base_Url}
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/artist/getartist/${artistId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE2YjdhZmM4ZDk3ZGMzZWYyZjU4IiwiaWF0IjoxNjcwODE2MDczLCJleHAiOjE2NzM0MDgwNzN9.850__kq6IrHdiqa3J43BL1bN_w3ZLwQOSdmnH4Cokys`,
  //             "Content-Type": "application/json",
  //             "Content-Length": "<calculated when request is sent>",
  //           },
  //         }
  //       );
  //       // setArtistDetails;
  //       setArtistDetails(response.data.artist[0]);
  //       // console.log(response);
  //       // const data = response.data.data;
  //       // console.log(offerWhitelist);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchArtist();
  // }, []);
  // console.log(artistDetails);
  return (
    <div>
      <NavArtfiOnly />
      <Profile />
      <CarouselComponent />
      <Bio />
      <Achievements />
    </div>
  );
};

export default artistDetails;
