/* eslint-disable @next/next/no-img-element */

import { Button } from "@mui/material";
import { Typography } from "../../reusables/Atoms";
import PowerdBy from "../PowerdBy";
import styles from "./Landing.module.scss";
type LandingProps = {
  setIsOpen: (_: boolean) => void,
  isOpen: boolean,
  referralCode: string | string[] | undefined
};

const Landing = ({ setIsOpen, isOpen }: LandingProps) => {
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
       <video  muted loop preload="auto"  autoPlay  playsInline className={styles.video} style={{ width: "100%" }}  >
          <source src="/Background/artfiVideo.mp4" type="video/mp4" />
        </video>
        <video  muted loop preload="auto"  autoPlay  playsInline className={styles.videombl}   >
          <source src="/Background/artfimbl.mp4" type="video/mp4" />
        </video>
        <PowerdBy/>
        <div className={styles.container}>
            <h6 className={styles.container_h6}>NEW ANNOUNCEMENT</h6>
            <img  className={styles.container_img}src="/Logo/artfinew.svg"/>
            <img  className={styles.container_img_mbl}src="/Logo/Mobile.png"/>

            <div className={styles.btn_container}>
              
                <Button className={styles.waitlist_btn}  style={{textTransform:"capitalize"}} onClick={() => setIsOpen(!isOpen)}>Waitlist now</Button>
                <a href="https://www.youtube.com/watch?v=CPxIpwI_zD8" target="_blank"><Button className={styles.play_btn} style={{textTransform:"capitalize"}}><img src="/Icons/play.svg" style={{marginRight:"10px"}}/>Play now </Button></a>

            </div>

        </div>
    
    </div>
  );
};

export default Landing;
