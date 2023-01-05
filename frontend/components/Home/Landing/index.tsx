/* eslint-disable @next/next/no-img-element */

import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Typography } from "../../reusables/Atoms";
import PowerdBy from "../PowerdBy";
import styles from "./Landing.module.scss";
type LandingProps = {
  setIsOpen: (_: boolean) => void;
  isOpen: boolean;
  referralCode: string | string[] | undefined;
  offerData: any;
};

const Landing = ({ setIsOpen, isOpen, offerData }: any) => {
  const [offer, setOffer] = useState(
    offerData.trueOfferings ? offerData.trueOfferings[0] : {}
  );
  const router = useRouter();
  console.log(offer, "offer");
  console.log(offerData, "jkl");
  return (
    <div className={styles.landing}>
      <div
        className={styles.video}
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        {offer.annoucmentDetails ? (
          offer.unveilingDetails ? (
            <iframe
              src={
                offer ? offer.unveilingDetails.unvielingBackgroundVideoLink : ""
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
          )
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
        offer.unveilingDetails ? (
          <iframe
            src={offer ? offer.unveilingDetails.mobileAndAnnouncementURL : ""}
            width="100%"
            className={styles.mobilevideo}
            height="1300px"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            src={offer ? offer.annoucmentDetails.mobileAndAnnouncementURL : ""}
            width="100%"
            className={styles.mobilevideo}
            height="1300px"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        )
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
        <h6 className={styles.container_h6}>
          {offer.unveilingDetails
            ? offer.unveilingDetails.CTAButtonType == "waitlist"
              ? "NEW UNVEILING"
              : "NEW UNVEILING"
            : "NEW ANNOUNCEMENT"}
        </h6>

        <div className={styles.container_img}>
          {offer.unveilingDetails ? (
            offer.unveilingDetails.CTAButtonType == "waitlist" ? (
              <>
                <p className={styles.artistName}>
                  {offer.headerDetails ? offer.headerDetails.Title : ""}{" "}
                  <label className={styles.artistNameInner}>
                    <span className={styles.by}>by</span>
                    {offer
                      ? offer.headerDetails
                        ? offer.headerDetails.artistName
                        : ""
                      : ""}
                    {offer ? (
                      offerData.IsArtistVerified ? (
                        <img
                          src="/Publiced/Vector.svg"
                          width="24px"
                          height="24px"
                        />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}{" "}
                  </label>
                </p>{" "}
              </>
            ) : (
              <>
                <p className={styles.artistName}>
                  {offer.headerDetails ? offer.headerDetails.Title : ""}{" "}
                  <label className={styles.artistNameInner}>
                    <span className={styles.by}>by</span>
                    <Link href={`artist/${offer.artistId}`}>
                      {offer
                        ? offer.headerDetails
                          ? offer.headerDetails.artistName
                          : ""
                        : ""}
                    </Link>
                    {offer ? (
                      offerData.IsArtistVerified ? (
                        <img
                          src="/Publiced/Vector.svg"
                          width="24px"
                          height="24px"
                        />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}{" "}
                  </label>
                </p>{" "}
              </>
            )
          ) : (
            <>
              <img className={styles.artlogo} src="/Logo/art.svg" />{" "}
              <img className={styles.close} src="/Logo/x.svg" />
              <p className={styles.artistName}>
                {offer.headerDetails ? offer.headerDetails.artistName : ""}
              </p>
            </>
          )}{" "}
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
