/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from "..";
import styles from "./footer.module.scss";
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

const leftNavMapping = [
  {
    link: "/",
    title: (<label style={{opacity:"0.8"}}>Company</label>),
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
    title: (<label style={{opacity:"0.8"}}>Legal</label>),
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

export const Footer = ({}: FooterProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [sendEmail, setSendEmail] = useState<boolean>(false)
  const socialMapping = [
    {
      link: "https://discord.gg/artfi",
      icon: <div className={styles.tooltip}><img src="Icons/icon-Discord.svg" /><span className=
      {styles.tooltiptext}>Discord</span></div> ,
    },
    {
      link: "https://www.facebook.com/artfiglobal",
      icon: <div className={styles.tooltip}><img src="Icons/facebook-svgrepo-com 1.svg"/><span className=
      {styles.tooltiptext}>Facebook</span></div>,
    },
    {
      link: "https://www.linkedin.com/company/artfiglobal/",
      icon: <div className={styles.tooltip}><img src="Icons/icon-linkedin.svg" /><span className=
      {styles.tooltiptext}>Linkedin</span></div>,
    },
    {
      link: "https://www.instagram.com/artfiglobal/",
      icon: <div className={styles.tooltip}><img src="Icons/icon-Discord-1.svg" /><span className=
      {styles.tooltiptext}>Instagram</span></div>,
    },
    {
      link: "https://twitter.com/artfiglobal",
      icon: <div className={styles.tooltip}><img src="Icons/icon-twitter.svg" /><span className=
      {styles.tooltiptext}>Twitter</span></div>,
    },
    {
      link: "https://t.me/artfi_announcement",
      icon: <div className={styles.tooltip}><img src="Icons/icon-twitter-1.svg" /><span className=
      {styles.tooltiptext}>Announcement</span></div>,
    },
    {
      link: "https://web.telegram.org/z/#-1733659747",
      icon: <div className={styles.tooltip}><img src="Icons/icon-twitter-1.svg" /><span className=
      {styles.tooltiptext}>Chat</span></div>,
    },
   
    // {
    //   link: "https://t.me/ArtFiGlobal_Chat",
    //   icon: <div className={styles.tooltip}><img src="Icons/icon-twitter-2.svg" /><span className=
    //   {styles.tooltiptext}>ArtfiGlobal</span></div>,
    // },
    {
      link: "https://www.youtube.com/channel/UCCXRL0Rj7aL63RGytknY48Q",
      icon: <span className={styles.tooltip}><img src="Icons/youtube.svg" /><span className=
      {styles.tooltiptext}>Youtube</span></span>,
    },
  ];
  return (
    <>     
    <footer className={styles.container}>    
     
    </footer>
    </>
  );
};

export default Footer;
