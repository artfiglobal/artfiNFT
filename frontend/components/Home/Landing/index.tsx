/* eslint-disable @next/next/no-img-element */

import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Typography } from "../../reusables/Atoms";
import PowerdBy from "../PowerdBy";
import styles from "./Landing.module.scss";
type LandingProps = {
  setIsOpen: (_: boolean) => void;
  isOpen: boolean;
  referralCode: string | string[] | undefined;
  offerData: any;
};

const Landing = ({ setIsOpen, isOpen, offering }: any) => {
  const [offer, setOffer] = useState<any>({});
  const router = useRouter();
  // console.log(offer, "jklmno");
  useEffect(() => {
    console.log(offering, "offeringklll");
    if (offering) {
      setOffer(offering.trueOfferings ? offering.trueOfferings[0] : {});
    }
  }, [offering]);
  return (
    <div className={styles.landing}>
      <div
        className={styles.video}
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        {offer.annoucmentDetails ? (
          <iframe
            src={
              offer
                ? offer.annoucmentDetails.backgroundCollabarationVideoLink
                : ""
            }
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "0",
            }}
            className={styles.videos}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "0",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      {offer.annoucmentDetails ? (
        <iframe
          src={offer ? offer.annoucmentDetails.mobileAndAnnouncementURL : ""}
          width="100%"
          className={styles.mobilevideo}
          height="1300px"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          src={
            offer.annoucmentDetails
              ? offer.annoucmentDetails.mobileAndAnnouncementURL
              : ""
          }
          width="100%"
          className={styles.mobilevideo}
          height="1300px"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <script src="https://player.vimeo.com/api/player.js"></script>
      {/* <iframe
        src={offer.annoucmentDetails.mobileAndAnnouncementURL}
        className={styles.videombl}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script> */}
      <div className={styles.pby}>
        <PowerdBy />
      </div>
      <div className={styles.container}>
        <h6 className={styles.container_h6}>NEW ANNOUNCEMENT</h6>

        <div className={styles.container_img}>
          <img src="/Logo/art.svg" /> <img src="/Logo/x.svg" />{" "}
          <p className={styles.artistName}>
            {offer.headerDetails ? offer.headerDetails.artistName : ""}
          </p>
        </div>
        {/* <img className={styles.container_img_mbl} src="/Logo/Mobile.png" /> */}
        {/* {offer.headerDetails.artistName} */}
        <div className={styles.btn_container}>
          {offer.unveilingDetails ? (
            offer.unveilingDetails.CTAButtonType == "waitlist" ? (
              <Button
                className={styles.waitlist_btn}
                style={{ textTransform: "capitalize" }}
                onClick={() => setIsOpen(!isOpen)}
              >
                Waitlist now
              </Button>
            ) : (
              <Button
                style={{ textTransform: "capitalize" }}
                className={styles.waitlist_btn}
                onClick={() => router.push("/whitelist")}
              >
                Whitelist Now
              </Button>
            )
          ) : (
            <Button
              className={styles.waitlist_btn}
              style={{ textTransform: "capitalize" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              Waitlist now
            </Button>
          )}
          <a
            href={
              offer.annoucmentDetails
                ? offer.annoucmentDetails.announcementVideoLink
                : ""
            }
            target="_blank"
          >
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
