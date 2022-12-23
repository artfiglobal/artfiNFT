import React from "react";
import ArtworkDetailsHeader from "../components/ArtworkDetailsHeader/ArtworkDetailsHeader";
import bk from "./bk.jpg";
import { Navigation } from "../components/reusables/Components";
import style from "../styles/artworkDetails.module.scss";
import Image from "next/image";
import { DetailCard } from "../components/Home2";
import VideoAboutArtist from "../components/VideoAboutArtist/VideoAboutArtist";

const ArtworkDetails = () => {
  return (
    <>
     <Navigation />
    <div className={style.details_container}>
     
      <ArtworkDetailsHeader />
      <div className={style.artworkImage_container}>
        <Image
          height="720"
          style={{ margin: "0 auto" }}
          // width="1400"
          src={bk}
          className={style.artworkImage}
        />
      </div>
      <div className={style.about_artwork}>
        <h2>Sagarmatha National Park – Mount Everest </h2>
        <p>
          is a roaming tryptich with fierce brush strokes that evoke the
          transcendental beauty of Earth’s highest peak. The oversized,
          three-canvas creation is the standout work from Jafri’s 50-painting
          series of UNESCO World Heritage Sites.
        </p>
      </div>
      <div className={style.artwork_Details}>
        <h1>Artwork Details</h1>
        <div className={style.artwork_details_inner}>
          <DetailCard
            url="image"
            title="ORIGINAL SIZE"
            content="380cm x 160cm"
          />
          <DetailCard
            url="note"
            title="SIGNATURE"
            content="Signed on the ownership"
          />
          <DetailCard url="calander" title="year" content="2021" />

          <DetailCard
            url="check"
            title="AUTHENTICITY"
            content="Sagarmatha National Park - Mount Everest  is
            accompanied by...
            Read more"
          />

          <DetailCard
            url="paint"
            title="medium"
            content="Oil  paint on canvas"
          />
          <DetailCard
            url="look"
            title="PROVENENCE"
            content="From the collection of Raza Beig"
          />
        </div>
      </div>
      <VideoAboutArtist />
      <div className={style.about_artist}>
        <h1>About Sacha Jafri</h1>
        <p>
          Sacha Jafri is one of the world’s most celebrated living artists. He
          is best known for his sprawling 17,177 square foot painting Journey of
          Humanity. It set records in 2020 as the largest-ever painting on
          canvas and is the second most expensive painting sold at auction by a
          living artist.{" "}
        </p>
        <p>
          Jafri holds an MFA from Oxford University and his artworks can be
          found in the personal collections of Spike Lee, Susan Sarandon, George
          Clooney, and Sharon Stone, among others.{" "}
        </p>
        <p>
          Jafri’s abract paintings activate the rich history of magic realism to
          reconnect humanity and awaken the child within us all.
        </p>
      </div>
    </div>
    </>
  );
};

export default ArtworkDetails;
