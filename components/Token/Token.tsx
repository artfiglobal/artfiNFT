
import React from 'react'
import styles from "../../styles/token.module.scss"
import { Typography } from "../reusables/Atoms";


const AboutSection = () => {
  return (
    <>
        <section className={styles.tokenAbout}>
          <img
            src="/Background/White-Token-Logo 3.png"
            alt="bg"
            className={styles.tokenAboutBG}
          />
          <div className={styles.h1}>
            About the token
          </div>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutText}>
            <br/>
              <p >
                      The Artfi token will be used for NFT marketplace payments, to reward stakers, and as a deflationary store of value asset designed to appreciate as the company grows and uses its revenues to burn the fixed supply. Artfi’s profitable consignment-based business model is structured to accrue value to the Artfi token.
              </p>
              <a href="#distribution">
                Token Distribution
                <img src="/Icons/downArrow.svg" alt="" />
              </a>
            </div>
          </div>
        </section>
    </>
  )
}

export {AboutSection}