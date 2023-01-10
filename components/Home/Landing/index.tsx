/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import PowerdBy from "../PowerdBy";
import styles from "./Landing.module.scss";

const Landing = ({ setIsOpen, isOpen, offerData }: any) => {
  const [offer, ] = useState(
    offerData.trueOfferings ? offerData.trueOfferings[0] : {}
  );
  const router = useRouter();
  
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
                    {
                      offer && offerData.IsArtistVerified ? 
                        <img
                          src="/Publiced/Vector.svg"
                          width="24px"
                          height="24px"
                          alt="vector"
                        /> : null
                    }{" "}
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
                      {
                        offer && offerData.IsArtistVerified ? 
                        <img
                          src="/Publiced/Vector.svg"
                          width="24px"
                          height="24px"
                          alt="vector"
                          /> : null
                      }{" "}
                  </label>
                </p>{" "}
              </>
            )
          ) : (
            <>
              <img alt="art" className={styles.artlogo} src="/Logo/art.svg" />{" "}
              <img alt="logo" className={styles.close} src="/Logo/x.svg" />
              <p className={styles.artistName}>
                {offer.headerDetails ? offer.headerDetails.artistName : ""}
              </p>
            </>
          )}{" "}
        </div>
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
            rel="noreferrer"
          >
            <Button
              className={styles.play_btn}
              style={{ textTransform: "capitalize" }}
            >
              <img alt="play" src="/Icons/play.svg" style={{ marginRight: "10px" }} />
              Play now{" "}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
