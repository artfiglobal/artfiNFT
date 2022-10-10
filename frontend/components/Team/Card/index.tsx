import React from "react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../../../styles/Team.module.scss";

type CardProps = {
  name: string;
  src: string;
  title: string;
  designation: string;
  content: string;
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
};

const Card = ({
  name,
  src,
  title,
  designation,
  content,
  linkedIn,
  twitter,
  instagram,
}: CardProps) => {
  return (
    <div>
      <div className={styles.flipCard}>
        <div className={styles.flipCard_inner}>
          <div className={styles.flipCard_front}>
            <img src={src} alt="" />
            <div className={styles.cardFrontContent}>
              <p>{name}</p>
              <p className={styles.designation}>{designation}</p>
            </div>
          </div>
          <div className={styles.flipCard_back}>
            <p>{title}</p>
            <span>{content}</span>
            <div className={styles.social}>
              {twitter && (
                <a href={twitter}>
                  <div>
                    <FaTwitter />
                  </div>
                </a>
              )}
              {linkedIn && (
                <a href={linkedIn}>
                  <div>
                    <FaLinkedinIn />
                  </div>
                </a>
              )}
              {instagram && (
                <a href={instagram}>
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
