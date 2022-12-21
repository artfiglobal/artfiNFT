/* eslint-disable @next/next/no-img-element */

import { Button } from "@mui/material";
import { useState } from "react";
import { Typography } from "../../reusables/Atoms";
import PowerdBy from "../PowerdBy";
import styles from "./Landing.module.scss";
type LandingProps = {
  setIsOpen: (_: boolean) => void;
  isOpen: boolean;
  referralCode: string | string[] | undefined;
  offerData:any
};

const Landing = ({ setIsOpen, isOpen,offerData }: LandingProps) => {
  const [offer, setOffer] = useState(offerData.trueOfferings?offerData.trueOfferings[0]:{})
  console.log(offer,"jkl")
  return (
    <div className={styles.landing}>
      {/* <div className={styles.landing}>
      <div className={styles.heading_wrapper} style={{textAlign:"center"}} >
        <Typography color="black" variant="heading" className={styles.webHeading}>
          <span className={styles.heading_highlight}>Discover</span>,{" "}
          <span className={styles.heading_highlight}>Collect</span> &{" "}
          <span className={styles.heading_highlight}>Invest</span> <br /> in 
          Bluechip Fine Art
        </Typography>
        <Typography color="black" variant="heading" className={styles.mblHeading}>
        <span className={styles.heading_highlight}>Discover</span>,{" "}
          <span className={styles.heading_highlight}>Collect</span> &{" "}
          <span className={styles.heading_highlight}>Invest</span> <br /> in 
          Bluechip Fine Art
        </Typography>

        <Typography color="black" variant="body" >
            <label className={styles.secondHedding}> A new era of investing in fine art enabled by <br/>  NFTs and blockchain </label>
        </Typography>
        <div className={styles.button_holder}>
          <button
            className={styles.waitlistBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            Waitlist now
          </button>
        </div>
      </div>
    </div> */}
      {/* <video
        muted
        loop
        preload="auto"
        autoPlay
        playsInline
        className={styles.video}
        style={{ width: "100%" }}
      > */}
        {/* <source src="https://vimeo.com/781871288" type="video/mp4" />
         */}
      {/* </video> */}
      {/* <iframe src="https://player.vimeo.com/video/781871288?h=bf477f42a4"  frameBorder="0" allow="autoplay fullscreen" allowFullScreen></iframe> */}
      <div  className={styles.video} style={{padding:"56.25% 0 0 0",position:"relative"}}>{offer.annoucmentDetails?<iframe src={offer.annoucmentDetails.backgroundCollabarationVideoLink} style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"0"}}  allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>:<iframe src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"0"}}  allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>}</div><script src="https://player.vimeo.com/api/player.js"></script>
      {/* <video
        muted
        loop
        preload="auto"
        autoPlay
        playsInline
        className={styles.videombl}
      >
        <source src="/Background/artfimbl.mp4" type="video/mp4" />
      </video> */}
      <iframe src={offer.annoucmentDetails.mobileAndAnnouncementURL} className={styles.videombl}  allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>
      <PowerdBy />
      <div className={styles.container}>
        <h6 className={styles.container_h6}>NEW ANNOUNCEMENT</h6>
        <img className={styles.container_img} src="/Logo/artfinew.svg" />
        <img className={styles.container_img_mbl} src="/Logo/Mobile.png" />

        <div className={styles.btn_container}>
          {offer.unveilingDetails?offer.unveilingDetails.CTAButtonType == "waitlist"?<Button
            className={styles.waitlist_btn}
            style={{ textTransform: "capitalize" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Waitlist now
          </Button>:<Button   style={{ textTransform: "capitalize" }}className={styles.waitlist_btn}>Whitelist Now</Button>:<Button
            className={styles.waitlist_btn}
            style={{ textTransform: "capitalize" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Waitlist now
          </Button>}
          <a href={offer.annoucmentDetails.announcementVideoLink} target="_blank">
            <Button
              className={styles.play_btn}
              style={{ textTransform: "capitalize" }}
            >
              <img src="/Icons/play.svg" style={{ marginRight: "10px" }} />
              Play now{" "}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
