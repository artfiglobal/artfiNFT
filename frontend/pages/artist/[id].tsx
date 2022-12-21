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

const artistDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [artistDetails, setArtistDetails] = useState({});

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/artist/getartist/${id}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE2YjdhZmM4ZDk3ZGMzZWYyZjU4IiwiaWF0IjoxNjcwODE2MDczLCJleHAiOjE2NzM0MDgwNzN9.850__kq6IrHdiqa3J43BL1bN_w3ZLwQOSdmnH4Cokys`,
              "Content-Type": "application/json",
              "Content-Length": "<calculated when request is sent>",
            },
          }
        );
        const data = response.data.artist[0];
        setArtistDetails(data);
        console.log(data, "data");
      } catch (err) {
        console.log(err);
      }
    };
    fetchArtist();
  }, [id]);

  // console.log(artistDetails);

  return (
    <div>
      <NavArtfiOnly />
      <Profile artistDetails={artistDetails} />
      <CarouselComponent artistDetails={artistDetails} />
      <Bio artistDetails={artistDetails} />
      <Achievements artistDetails={artistDetails} />
    </div>
  );
};

export default artistDetails;
