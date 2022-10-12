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

const leftNavMapping = [
  {
    link: "/",
    title: "Company",
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
    title:"Careers"
  },
  {
    link: "/",
    title: "Institutional Buyer",
  },
  {
    link: "https://artfi.medium.com/",
    title: "Blog",
  }
  ,
  {
    link: "/faq",
    title: "FAQ",
  }
  ,
  {
    link: "/contact",
    title: "Contact Us",
  }
];

const rightNavMapping = [
  {
    link: "/",
    title: "Legal",
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
 
  {
    link: "https://docsend.com/view/3edyk84bwi7dvx8g",
    title: "Whitepaper",
  },
];



type FooterProps = {};

export const Footer = ({}: FooterProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const socialMapping = [
    {
      link: "https://discord.gg/artfi",
      icon: <div className={styles.tooltip}><FaDiscord /><span className=
      {styles.tooltiptext}>Artfi</span></div> ,
    },
    {
      link: "https://www.facebook.com/artfiglobal",
      icon: <div className={styles.tooltip}><FaFacebookF /><span className=
      {styles.tooltiptext}>Facebook</span></div>,
    },
    {
      link: "https://www.linkedin.com/company/artfiglobal/",
      icon: <div className={styles.tooltip}><FaLinkedinIn /><span className=
      {styles.tooltiptext}>Artifiglobal</span></div>,
    },
    {
      link: "https://www.instagram.com/artfiglobal/",
      icon: <div className={styles.tooltip}><FaInstagram /><span className=
      {styles.tooltiptext}>Instagram</span></div>,
    },
    {
      link: "https://twitter.com/artfiglobal",
      icon: <div className={styles.tooltip}><FaTwitter /><span className=
      {styles.tooltiptext}>Twitter</span></div>,
    },
    {
      link: "https://t.me/artfi_announcement",
      icon: <div className={styles.tooltip}><FaTelegramPlane /><span className=
      {styles.tooltiptext}>Teligram</span></div>,
    },
    // {
    //   link: "https://t.me/ArtFiGlobal_Chat",
    //   icon: <div className={styles.tooltip}><FaTelegramPlane /><span className=
    //   {styles.tooltiptext}>ArtfiGlobal</span></div>,
    // },
    // {
    //   link: "https://artfi.medium.com/",
    //   icon: <div className={styles.tooltip}><FaMedium /><span className=
    //   {styles.tooltiptext}>Artfi</span></div>,
    // },
    {
      link: "https://artfi.medium.com/",
      icon: <span className={styles.tooltip}><FaYoutube /><span className=
      {styles.tooltiptext}>Youtube</span></span>,
    },
  ];
  return (
    <>
    {/* <div className={styles.poweredBy} style={{display:"flex",justifyContent:"center",alignItems:"center", padding:"20px"}}>
        <Typography variant="body" color="black" style={{display:"inline-block"}}>
          Powered by
        </Typography>
        <div style={{width:"100%",textAlign:"center"}}>
        <div style={{ margin:"0 auto",display:"inline-block", textAlign:"center"}}>
        <a href="https://alturaashart.com/"  >
          <img src="/Publiced/Powered by.png" alt="alturaash" width="30%" />
        </a>
        </div>
        <div style={{padding:"0 40px",margin:"0 auto", display:"inline-block" ,textAlign:"center"}}>
        <a href="https://alturaashart.com/">
          <img src="/Publiced/altus.jpg" alt="alturaash" width="30%"/>
        </a>
        </div>
        <div style={{padding:"0 40px",margin:"0 auto", display:"inline-block", textAlign:"center"}}>
        <a href="https://polygon.technology/" >
          <img src="/Publiced/polygon.png" alt="polygon" width="30%"/>
        </a>
        </div>
        </div>
      </div> */}
     

<div style={{display:"flex",justifyContent:"center",alignItems:"center", borderTop: "3px solid #E6E6E6"}}> 
     
                  <Card > <img src="/Publiced/Powered by.svg" alt="alturaash" width="100%"/></Card>
                  <Card style={{display:"flex"}}> <img src="/Publiced/image 4.svg" alt="alturaash" width="30%"/><img src="/Publiced/ALTURAASH.svg" alt="alturaash" width="75%"/></Card>
                  <Card > <img src="/Publiced/Group 89.svg" alt="alturaash" width="100%"/></Card>

      </div>
      
    <footer className={styles.container}>
      
      
      <div className={styles.main}>
        <div className={styles.artfi}>
          <img
            src="/images/reusables/ArtfiWhite.png"
            alt="Artfi"
            width={154}
            className={styles.logo}
          />
          <Typography variant="body" color="white" className={styles.text}>
            Discover, Collect & Invest in
          </Typography>
          <Typography variant="body" color="white" className={styles.text}>
            Fine Arts.
          </Typography>
          <div className={styles.socialContainer}>
            {socialMapping.map((data, index) => {
              return (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={data.link}
                  key={index}
                >
                  <div key={index} className={styles.social}>
                    {data.icon}
                  </div>
                </a>
              );
            })}
          </div>
          <Typography variant="body" color="white" className={styles.cc}>
            Copyright @ 2022 Artfi
          </Typography>
          <Typography variant="body" color="white" className={styles.cc}>
            All rights Reserved.
          </Typography>
        </div>

        <div className={styles.contact}>
          <div className={styles.mail}>
            <FaAt color="#FFF" />
            <a href="mailto:hello@artfi.world">hello@artfi.world</a>
          </div>
          <p className={styles.text}>Want to join the NFT Waitlist?</p>

          <form action="" className={styles.patreon}>
            <div className={styles.left}>
              <FaAt color="#FFF" />
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
                addToWaitlist(email, true, "").then((res) => {
                  console.log(res);
                  setEmail("");
                });
              }}
            >
              <BsArrowRightSquare />
            </button>
          </form>
        </div>

        <div className={styles.navigation}>
          <div className={styles.Nav}>
            {leftNavMapping.map((data, index) => {
              return (<div key={index}>
               <Link href={data.link} key={index} passHref>
                  {data.link === "https://977vnkbygg7.typeform.com/to/SevVnwe8"?<a  target="_blank"> {data.title} </a>:data.title} 
                </Link>
                </div> );
            })}
          </div>
          <div className={styles.Nav}>
            {rightNavMapping.map((data, index) => {
              return (
                <Link href={data.link}  key={index} passHref>
                {data.title === "Whitepaper" || data.title === "Careers We re Hiring"?<a  target="_blank"> {data.title} </a>:data.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
