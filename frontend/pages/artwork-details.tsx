import React, { useContext, useEffect, useState } from "react";
import ArtworkDetailsHeader from "../components/ArtworkDetailsHeader/ArtworkDetailsHeader";
import bk from "./bk.jpg";
import { Navigation } from "../components/reusables/Components";
import style from "../styles/artworkDetails.module.scss";
import Image from "next/image";
import { DetailCard } from "../components/Home2";
import VideoAboutArtist from "../components/VideoAboutArtist/VideoAboutArtist";
import Link from "next/link";
import { GeneralContext } from "../context/GeneralState";
import Typography from "../components/reusables2/Atoms/Typography2";
import axios from "axios";

const ArtworkDetails = () => {
  const [artworkDetails, setArtworkDetails] = useState<any>({});
  const [artworkWidth, setArtworkWidth] = useState<number>(0);
  const [artworkHeight, setArtworkHeight] = useState<number>(0);
  const [artWorkDescription, setArtWorkDescription] = useState("");
  const [artworkName, setArtworkName] = useState("");
  const [signature, setSignature] = useState("");
  const [year, setYear] = useState("");
  const [authencity, setAuthencity] = useState("");
  const [medium, setMedium] = useState("");
  const [provenence, setProvenence] = useState("");
  const [aboutArtist, setAboutArtist] = useState("");
  const [artistName, setArtistName] = useState("");
  const [innerWidth, setInnerWidth] = useState(0);

  // console.log(artworkDetails.whitelistDetails.imageOfArtWork);
  const artworkImage = artworkDetails?.whitelistDetails?.imageOfArtWork;
  console.log(artworkImage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //${process.env.NEXT_PUBLIC_React_App_Base_Url}
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getallongoingtrueoffering`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE1ZGJkNmE0YjZjZWQ2YzJiZjZlIiwiaWF0IjoxNjY5ODA5MTY5LCJleHAiOjE2NzI0MDExNjl9.oXlcdA_DLpOHROcMCX2rTHeviiWcvkEMarYhmkXB8gE`,
              "Content-Type": "application/json",
              "Content-Length": "<calculated when request is sent>",
            },
          }
        );
        // console.log(response);
        const data = response.data.data.trueOfferings;
        setArtworkDetails({
          whitelistDetails: data[0].whitelistDetails,
          artwork: data[0].addDetails,
        });
        setArtworkWidth(
          Math.floor(
            data[0]?.whitelistDetails?.width *
              data[0]?.whitelistDetails?.columnNumber *
              0.0265
          )
        );
        setArtworkHeight(
          Math.floor(
            data[0]?.whitelistDetails?.height *
              data[0]?.whitelistDetails?.rowNumber *
              0.0265
          )
        );
        // setArtworkHeight(data[0].whitelistDetails.height);
        setArtworkName(data[0]?.whitelistDetails?.Title);
        setSignature(data[0]?.whitelistDetails?.signature);
        setYear(data[0]?.whitelistDetails?.year);
        setMedium(data[0]?.whitelistDetails?.medium);
        setProvenence(data[0]?.whitelistDetails?.provenence);
        setAuthencity(data[0]?.whitelistDetails?.authencity);
        setArtWorkDescription(data[0]?.addDetails?.artWorkDescription);
        setArtistName(data[0]?.whitelistDetails?.artistName);
        setAboutArtist(data[0]?.addDetails?.aboutArtist);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const width = globalThis?.window?.innerWidth;

    setInnerWidth(width);
  }, [innerWidth]);
  return (
    <>
      <Navigation />
      <div className={style.details_container}>
        {/* <Navigation /> */}
        <ArtworkDetailsHeader artworkDetails={artworkDetails} />
        <div className={style.artworkImage_container}>
          <Image
            height={"100%"}
            width={"100%"}
            style={{ margin: "0 auto" }}
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artworkImage}`}
            className={style.artworkImage}
          />
        </div>
        <div className={style.about_artwork}>
          <h2>{artworkName} </h2>
          <p>{artWorkDescription}</p>
        </div>
        <div className={style.artwork_Details}>
          <Typography color="black" fontWeight="semiBold" variant="subheading">
            Artwork Details
          </Typography>
          <div className={style.artwork_details_inner}>
            <DetailCard
              url="image"
              title="ORIGINAL SIZE"
              content={artworkWidth + "cm" + " x " + artworkHeight + "cm"}
            />
            <DetailCard url="note" title="signature" content={signature} />
            <DetailCard url="calander" title="year" content={year} />
            <div>
              <DetailCard url="check" title="authencity" content={authencity} />
              <Link href="/">Read more</Link>
            </div>
            <DetailCard url="paint" title="medium" content={medium} />
            <DetailCard url="look" title="provenence" content={provenence} />
          </div>
        </div>
        <VideoAboutArtist
          explanationVideoLink={artworkDetails?.artwork?.explanationVideoLink}
          artworkName={artworkName}
          artistName={artistName}
        />
        <div className={style.about_artist}>
          <Typography color="black" fontWeight="semiBold" variant="subheading">
            About {artistName}
          </Typography>
          <p>{aboutArtist}</p>
        </div>
      </div>
    </>
  );
};

export default ArtworkDetails;
