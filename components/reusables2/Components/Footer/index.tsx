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
} from "react-icons/fa";

import { BsArrowRightSquare } from "react-icons/bs";
import Link from "next/link";
import { useContext, useState } from "react";
import APIContext from "../../../../context/APIContext";

const leftNavMapping = [
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
        <Button variant="primaryNav" extraClass={styles.hire}>
          {/* {" "} */}
          We&apos;re Hiring
        </Button>
      </div>
    ),
  },
  {
    link: "https://artfi.medium.com/",
    title: "Blog",
  },
];

const rightNavMapping = [
  {
    link: "",
    title: "Legal",
  },
  {
    link: "",
    title: "Terms",
  },
  {
    link: "",
    title: "Privacy Policy",
  },
  {
    link: "",
    title: <>Bill of Rights</>,
  },
  {
    link: "",
    title: "Pitch Deck",
  },
  {
    link: "",
    title: "Whitepaper",
  },
];

const socialMapping = [
  {
    link: "https://discord.gg/artfi",
    icon: <FaDiscord />,
  },
  {
    link: "https://www.facebook.com/artfiglobal",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.linkedin.com/company/artfiglobal/",
    icon: <FaLinkedinIn />,
  },
  {
    link: "https://www.instagram.com/artfiglobal/",
    icon: <FaInstagram />,
  },
  {
    link: "https://twitter.com/artfiglobal",
    icon: <FaTwitter />,
  },
  {
    link: "https://t.me/artfi_announcement",
    icon: <FaTelegramPlane />,
  },
  {
    link: "https://t.me/ArtFiGlobal_Chat",
    icon: <FaTelegramPlane />,
  },
  {
    link: "https://artfi.medium.com/",
    icon: <FaMedium />,
  },
];

type FooterProps = {};

export const Footer = ({}: FooterProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const { API } = useContext(APIContext);

  async function sendMailToUser() {
    try {
      const res = await API.post("/whitelist/send-mail", { email });

      console.log({ res });
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.poweredBy}>
          <Typography variant="body" color="white">
            Powered by
          </Typography>
          <a href="https://alturaashart.com/">
            <img src="/images/reusables/alturaash.png" alt="alturaash" />
          </a>
          <a href="https://polygon.technology/">
            <img src="/images/reusables/polygonWhite.png" alt="polygon" />
          </a>
        </div>
        <div className={styles.seperator} />
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
                type="submit"
                title="Email"
                onClick={(e) => {
                  e.preventDefault();
                  sendMailToUser().then((res: any) => {
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
                return (
                  <Link href={data.link} key={index} passHref>
                    {data.title}
                  </Link>
                );
              })}
            </div>
            <div className={styles.Nav}>
              {rightNavMapping.map((data, index) => {
                return (
                  <Link href={data.link} key={index} passHref>
                    {data.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
