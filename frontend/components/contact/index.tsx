import { Card } from '@mantine/core'
import React from 'react'
import styles from "./Contact.module.scss"

export const ContactPart = () => {
  return (
    <>

      <div >
        <h1 className={styles.heading}>Contact Us</h1></div>
              <div className={styles.small} >

                <div style={{width:"50%"}}>
                  <div style={{width:"100%"}}>
                    <div style={{ display: "flex" }}>
                       <img src="/Publiced/Frame.svg" />
                        <h2 style={{ marginLeft: "20px" }} className={styles.innerheading}>Address</h2>
                    </div>
                    <p className={styles.subheading}>Representative Office:</p>
                    <p className={styles.p} >
                      Suite 805, API Trio Tower, Shikesh
                      Zayed Road, Dubai, United Arab
                      Emirates
                    </p>
                  </div>
                  
                  <div className={styles.secondrow}>
                    <p className={styles.subheading}>Registered Office:</p>
                    <p className={styles.p}>
                      
                      Suite 305, Griffith Corporate Centre,
                      Kingstown, Saint Vincent and the Grenadines.
                    </p>
                  </div>
                </div>
                <div >
                  <div style={{ display: "flex" }}><img src="/Publiced/primary.svg" />
                    <h2 style={{ marginLeft: "20px" }} className={styles.innerheading1}>Email Us at</h2><br />
                  </div>
                     <p className={styles.email}>< a href="https://mail.google.com/mail/?view=cm&source=mailto&to=hello@artfi.world" target="_blank"><u>hello@artfi.world</u></a></p>
                </div>
      </div>
    </>

  )
}
