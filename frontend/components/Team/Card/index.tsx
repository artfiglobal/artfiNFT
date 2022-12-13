import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../../../styles/Team.module.scss";

type CardProps = {
  fullName: string;
  photo: string;
  position: string;
  bio: string;
  content: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  type?: string;
};

const Card = ({
  bio,
  fullName,
  instagramUrl,
  linkedinUrl,
  photo,
  position,
  twitterUrl,
  type,
}: CardProps) => {
  return (
    <div>
      <div className={styles.flipCard}>
        <div className={styles.flipCard_inner}>
          <div
            className={
              fullName ? styles.flipCard_front : styles.flipCard_front_after
            }
          >
            <img
              src={`${process.env.React_App_Base_Url}/${photo}`}
              alt=""
              width={100}
            />
            <div className={styles.cardFrontContent}>
              <p>{fullName}</p>
              <p className={styles.designation}>{position}</p>
            </div>
          </div>
          <div className={styles.flipCard_back}>
            <div className={styles.name}>{fullName}</div>
            <div className={styles.cardtitle}>{position}</div>
            <label>{bio}</label>
            <div className={styles.social}>
              {twitterUrl && (
                <a href={twitterUrl}>
                  <div>
                    <FaTwitter />
                  </div>
                </a>
              )}
              {linkedinUrl && (
                <a href={linkedinUrl}>
                  <div>
                    <FaLinkedinIn />
                  </div>
                </a>
              )}
              {instagramUrl && (
                <a href={instagramUrl}>
                  <div>
                    <FaInstagram />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
