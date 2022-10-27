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

const leftNavMapping = [
  {
    link: "/",
    title: (<><label style={{opacity:"0.8"}}>Company</label></>),
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
     

      <div className={styles.outerFooter} style={{background:"white"}}> 
     
                  <img src="/Publiced/Powered by.svg" alt="Powerd By" className={styles.pwd} />
                   <a href="https://alturaashart.com/" target="_blank"><img src="/Publiced/AS.svg" alt="alturaash" className={styles.alturaash} /></a>
                   <a href="https://polygon.technology/" target="_blank"><img src="/Publiced/Pol.svg" alt="alturaash" className={styles.polygon}/></a>

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
               Bringing the world's most prestigious asset class on chain.
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
                  style={{marginRight:"16px"}}
                >
                  {/* <div key={index} className={styles.social}> */}
                    {data.icon}
                  {/* </div> */}
                </a>
                </>
              );
            })}
          </div>
          <Typography variant="body" color="white" className={styles.cc}>
               Copyright @ 2022  Artfi. All rights Reserved.
          </Typography>
          {/* <Typography variant="body" color="white" className={styles.cc}>
            All rights Reserved.
          </Typography> */}
        </div>

        <div className={styles.contact}>
          <div className={styles.mail}>
            <FaAt color="#FFF" />
            <a href="mailto:hello@artfi.world">hello@artfi.world</a>
          </div>
          <p className={styles.text}>Join our Newsletter</p>

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
                setSendEmail(true)

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
                <>
                <Link href={data.link}  key={index} passHref>
                  {data.title === "Whitepaper" || data.title === "Careers We re Hiring"?<a  target="_blank"> {data.title} </a>:data.title}
                </Link>
                </>
              );
            })}
          </div>

          <Dialog
        open={sendEmail}
        onClose={()=>setSendEmail(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.models}
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src="/Icons/right.svg"/>
            <h1>
                Thank you for joining our Newsletter!
            </h1>
            <button onClick={()=>setSendEmail(false)}>
                 Okay
            </button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
