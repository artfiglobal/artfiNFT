import { Card } from '@mantine/core'
import React from 'react'
import styles from "./Contact.module.scss"

export const ContactPart = () => {
  return (
    <>

      <div style={{ paddingTop: "80px", margin: "0 10%" }}><h1 style={{ fontSize: "40px" }}>Contact Us</h1></div>
      <div className={styles.small} style={{ margin: "2px 10%" }}>

        <div >
          <div style={{ width: "300px" }}>

            <div style={{ display: "flex" }}><img src="/Publiced/FRAME.svg" /> <h2 style={{ marginLeft: "20px" }}>Address</h2></div>

            <p style={{ color: "#585858" }}>Representattive Office:</p>
            <p >Suite 805, API Trio Tower, Shikesh
              Zayed Road, Dubai, United Arab
              Emirates</p>
          </div>
          <br/>
          <div >
            <p style={{ color: "#585858" }}>Registered Office:</p>
            <p><span style={{ color: "black", fontWeight: "700" }}>Artfi Global LLC</span><br />
              Suite 305, Griffith Corporate Centre,
              Kingstown, St. Vincent and the Grenadines.</p>
          </div>

        </div>
        <div >
          <div style={{ display: "flex" }}><img src="/Publiced/primary.svg" /> 
          <h2 style={{ marginLeft: "20px" }}>Email Us at</h2><br/>
        
          </div>
         <h2 style={{paddingLeft:"30px"}}><u>hello@artfi.world</u></h2>

        </div>
      </div>
    </>

  )
}
