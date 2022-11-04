import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Card from './Components/Card'
import styles from './hero.module.scss'

const HeroSection = () => {
  return (
    <div>
        <section className={styles.herosection}>
            <h1>Vs</h1>
            <h2>Floral Artwork</h2>
            <h4><label>NEW ARTWORK</label> <p> BY VS GAITONDE<img src="/Publiced/Vector.svg"/></p></h4>
            
               <div style={{textAlign:"center"}}><button className={styles.play}><img src="/Icons/playIcon.svg"/>Play</button></div>

          
            <div className={styles.imgBlock}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <Card/>
                    <div style={{marginTop:"-30px"}}>
                    <Image src="/Background/ellipse.svg" alt="ellipose"  width="528px" height="60px"/></div>
                </div>

                </div>
        </section>
        <section className={styles.description}>
               <p>Love is in the Air is a quintessential Banksy painting: instantly recognizable, the image has become synonymous with the artist’s indelible graphic style, wry humor and galvanizing political commentary</p>
        </section>
        <section style={{width:"100%"}}>
          <img src="/Background/ArtfiNftImgBg.svg" alt="bg" width="100%" height="100%"/>
          
        </section>
        <section className={styles.watchSection}>
          <div className={styles.watchInnerSection}>
              <div>
                   <h1 >On your Digital Devices</h1>
              </div>
              <div style={{textAlign:"center"}}>
                 {/* <img  src="/Background/Group 18803.svg"/> */}
                 <img src="/Background/Group 18803.png" alt="bg" width="350px" height="100%"/>
                 
               
              </div>
          </div>
        </section>
        <section className={styles.watchSection}>
          <div className={styles.watchInnerSection}>
              <div>
                   <h1>On Social Media</h1>
                   <p>Using Digital Collectibles</p>
                   <label className={styles.social}>
                      <img src="/Icons/Facebook svg.svg" alt="facebook" width="50px" height="50px"/>
                      <img src="/Icons/instagram.svg" alt="instagram" width="50px" height="50px"/>
                   </label>

              </div>
              <div style={{textAlign:"center"}}>
                 {/* <img  src="/Background/Group 18803.svg" alt="bg2" width="100%" height="100%"/> */}
                <img src="/Background/iPhone 12 Pro (Wooden Hands).svg"/>
               
              </div>
          </div>
        </section>
    </div>
  )
}

export default HeroSection
