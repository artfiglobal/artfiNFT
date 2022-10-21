/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from "../../Atoms";
import styles from "./Footer.module.scss";
import {
  FaDiscord,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaAt,
  FaMedium,
  FaYoutube
} from "react-icons/fa";
import { Tooltip } from "@mantine/core";
import { BsArrowRightSquare, BsDisplay } from "react-icons/bs";
import Link from "next/link";
import { addToWaitlist } from "../../../../utils/waitlistFunctions";
import { useState } from "react";
import { Card } from "@mantine/core";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import Image from "next/image";
import { Whitelist } from "../../../Home";

const leftNavMapping = [
  {
    link: "/",
    title: (<label style={{ opacity: "0.8" }}>Company</label>),
  },
  {
    link: "/about-us",
    title: "About Artfi",
  },
  {
    link: "/project",
    title: "Project",
  },
  {
    link: "/team",
    title: "Team",
  },
  {
    link: "https://977vnkbygg7.typeform.com/to/SevVnwe8",
    title: (
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        Careers{" "}
        <Button variant="md" extraClass={styles.hire}>
          {/* {" "} */}
          We&apos;re Hiring
        </Button>
      </div>
    )

  },
  {
    link: "https://artfi.medium.com/",
    title: "Blog",
  }
  ,
  {
    link: "/faq",
    title: "FAQ",
  },
  {
    link: "https://docsend.com/view/3edyk84bwi7dvx8g",
    title: "Whitepaper",
  },

];

const rightNavMapping = [
  {
    link: "/",
    title: (<label style={{ opacity: "0.8" }}>Legal</label>),
  },
  {
    link: "/",
    title: "Terms",
  },
  {
    link: "/",
    title: "Privacy Policy",
  },
  {
    link: "/",
    title: <>Bill of Rights</>,
  },

];



type FooterProps = {};

export const Footer = ({ }: FooterProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [sendEmail, setSendEmail] = useState<boolean>(false)
  const socialMapping = [
    {
      link: "https://discord.gg/artfi",
      icon: <div className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="/Icons/discord.svg" /><span className=
        {styles.tooltiptext}>Discord</span></div>,
    },
    {
      link: "https://www.facebook.com/artfiglobal",
      icon: <div className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="/Icons/fb.svg" /><span className=
        {styles.tooltiptext}>Facebook</span></div>,
    },
    {
      link: "https://www.linkedin.com/company/artfiglobal/",
      icon: <div className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="/Icons/in.svg" /><span className=
        {styles.tooltiptext}>Linkedin</span></div>,
    },
    {
      link: "https://www.instagram.com/artfiglobal/",
      icon: <div className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="/Icons/insta.svg" /><span className=
        {styles.tooltiptext}>Instagram</span></div>
    },
    {
      link: "https://twitter.com/artfiglobal",
      icon: <div className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="/Icons/tw.svg" /><span className=
        {styles.tooltiptext}>Twitter</span></div>,
    },
    {
      link: "https://t.me/artfi_announcement",
      icon: <div className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="/Icons/tel.svg" /><span className=
        {styles.tooltiptext}>Announcement</span></div>,
    },
    {
      link: "https://web.telegram.org/z/#-1733659747",
      icon: <div className={styles.tooltip}><Image alt="icons" src="/Icons/tel.svg" width="60px" height="60px" /><span className=
        {styles.tooltiptext}>Chat</span></div>,
    },

    // {
    //   link: "https://t.me/ArtFiGlobal_Chat",
    //   icon: <div className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="Icons/icon-twitter-2.svg" /><span className=
    //   {styles.tooltiptext}>ArtfiGlobal</span></div>,
    // },
    {
      link: "https://www.youtube.com/channel/UCCXRL0Rj7aL63RGytknY48Q",
      icon: <span className={styles.tooltip}><Image width="60px" height="60px" alt="icons" src="/Icons/yt.svg" /><span className=
      {styles.tooltiptext}>Youtube</span></span>,
    },
  ];
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.main}>
          <div className={styles.artfi}>
            <Image
              src="/Logo/bl.png"
              alt="Artfi"
              width={200}
              height={80}
              className={styles.logo}
            />
            <Typography variant="body" color="white" className={styles.text}>
              Bringing the world’s largest asset class via blockchain.
            </Typography>
            {/* <Typography variant="body" color="white" className={styles.text}>
            Fine Arts.
          </Typography> */}
            <div className={styles.socialContainer}>
              {socialMapping.map((data, index) => {
                return (
                  <>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={data.link}
                      key={index}
                      style={{ marginRight: "16px" }}
                    >
                      {/* <div key={index} className={styles.social}> */}
                      {data.icon}
                      {/* </div> */}
                    </a>
                  </>
                );
              })}
            </div>
            <div className={styles.ccContainer}>
              <Typography variant="body" color="white" className={styles.cc}>
                Copyright @ 2022  Artfi. All rights Reserved.
              </Typography>
              <div className={styles.contact}>
                <div className={styles.mail}>
                  <FaAt color="#FFF" />
                  <a href="mailto:hello@artfi.world">hello@artfi.world</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.Nav}>
              {leftNavMapping.map((data, index) => {
                return (<div key={index}>
                  <Link href={data.link} key={index} passHref>
                    {data.link === "https://977vnkbygg7.typeform.com/to/SevVnwe8" ? <a target="_blank"> {data.title} </a> : data.title}
                  </Link>
                </div>);
              })}

              <div className={styles.contact} style={{ marginTop: "10px", width: "fit-content" }}>

                <p className={styles.text}>Join our Newsletter</p>

                <form action="" className={styles.patreon}>
                  <div className={styles.left}>
                    <input
                      type="email"
                      placeholder="Enter your email here"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSendEmail(true)

                      addToWaitlist(email, true, "").then((res) => {
                        console.log(res);
                        setEmail("");
                      });
                    }}
                  >
                    <Image src="/Icons/ar.svg" alt="arow" width="24px" height="24px" />
                    
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.Nav}>
              {rightNavMapping.map((data, index) => {
                return (
                  <>
                    <Link href={data.link} key={index} passHref>
                      {data.title === "Whitepaper" || data.title === "Careers We re Hiring" ? <a target="_blank"> {data.title} </a> : data.title}
                    </Link>
                  </>
                );
              })}
            </div>

          </div>
        </div>
      </footer>

      <Dialog
        open={sendEmail}
        onClose={() => setSendEmail(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.models}
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src="/Icons/right.svg" />
            <h1>
              Thank you for joining our Newsletter!
            </h1>
            <button onClick={() => setSendEmail(false)}>
              Okay
            </button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;


