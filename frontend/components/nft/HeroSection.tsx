import { Button } from '@mui/material'
import Image from 'next/image'
import React,{useState} from 'react'
import Card from './Components/Card'
import styles from './hero.module.scss'

const HeroSection = ({nft,artist}:any) => {
  console.log("nft",nft)
  const [artistName, setArtistName] = useState(artist.data.trueOfferings[0].headerDetails.artistName)
  return (
    <div>
        <section className={styles.herosection}>
            <h1><img src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${nft.uploadsignature}`}/></h1>
            <h2>{nft?nft.artWorkName:""}</h2>
            <h4><label>NEW ARTWORK</label> <p> BY {artistName} {!artist.IsArtistVerified?<img style={{marginLeft:"10px"}} src="/Publiced/Vector.svg"/>:""}</p></h4>
            
               {/* <div style={{textAlign:"center"}}><button className={styles.play}><img src="/Icons/playIcon.svg"/>Play</button></div> */}

             <div className={styles.ot}>Ownership Token</div>
            <div className={styles.imgBlock}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                   {nft? <Card srcdata={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${nft.uploadNFTDesign}`}/>:""}
                  </div>

                </div>
        </section>
        <section className={styles.description}>
               <p>{nft?nft.description?nft.description:"":""}</p>
        </section>
        <section className={styles.secBg} style={{width:"100%"}}>
          {/* <img src="" alt="bg" width="100%" height="100%"/>hii */}
          
              <div style={{textAlign:"center"}}>
                 {/* <img  src="/Background/Group 18803.svg"/> */}
                 
                {nft?nft.uploadNFTDesign.length > 0?<img src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${nft.digitalScreenNFTImage }`} alt="bg" className={styles.imgdnft} />: <img src="/Background/Group 18803.png" alt="bg" width="350px" height="100%"/>:""}
                 
              </div>
              
              <div>
                   <h1 >Display on Digital Screens</h1>
              </div>
       
        </section>
        <section className={styles.watchSection}>
          <div className={styles.watchInnerSection}>
              <div>
                   <h1 >Display on Devices</h1>
              </div>
              <div style={{textAlign:"center"}}>
                 {/* <img  src="/Background/Group 18803.svg"/> */}
               {nft?nft.gadgetsNFTImage?<img src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${nft.gadgetsNFTImage}`} alt="bg" className={styles.imggnft}/>:<img src="/Background/Group 18803.png" alt="bg" width="350px" height="100%"/>:""}
              </div>
          </div>
        </section>
        <section className={styles.watchSection}>
          <div className={styles.watchInnerSection}>
          <div style={{textAlign:"center"}}>
                 {/* <img  src="/Background/Group 18803.svg" alt="bg2" width="100%" height="100%"/> */}
                 {nft?nft.instagramNFTImage ?<img src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${nft.instagramNFTImage}`} width="100%"/>:<img src="/Background/iPhone 12 Pro (Wooden Hands).svg"/>:""}
               
              </div>
              <div>
                   <h1 style={{position:"relative"}}>Share & Trade <span className={styles.instaImg}> <label>on</label> <img src="Logo/image 21.png" /></span></h1>
                   {/* <p>Using Digital Collectibles</p>
                   <label className={styles.social}>
                      <img src="/Icons/Facebook svg.svg" alt="facebook" width="50px" height="50px"/>
                      <img src="/Icons/instagram.svg" alt="instagram" width="50px" height="50px"/>
                   </label> */}

              </div>
          </div>
        </section>
    </div>
  )
}

export default HeroSection
