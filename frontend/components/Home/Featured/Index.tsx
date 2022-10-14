import { Card } from "@mantine/core";
import Image from "next/image";
import styles from "./fetures.module.scss";
type FeaturedProps = {};

const images = [
    {
        src:"/Publiced/CNBC.svg",
        // width:"120px"
        link:"https://www.cnbctv18.com/startup/funding-rundownspotnana-raises-75-million-pricelabs-raises-30-million-atato-secures-6-million--shilpa-shetty-invests-in-fastup-and-chicnutrix-14303592.htm"
    }
    ,
    {
        src:"/Publiced/Arabian Business.svg",
        // width:"180px"
        link:"https://www.arabianbusiness.com/money/wealth/alternative-assets/uae-investors-bet-on-indian-nft-startup-as-it-raises-3-2-million?fbclid=IwAR3hvsBMN5kGpnl-yA2Y3SY2v-8MQ0hqWEWMJfi6rPir1NzFZEReFzs4zSU"
    },
    {
        src:"/Publiced/Times of India.svg",
        // width:"180px"
        link:"https://timesofindia.indiatimes.com/blogs/voices/how-does-india-fare-in-terms-of-fine-art-nfts/"
    },
    {
        src:"/Publiced/Your Story.svg",
        // width:"210px"
        link:"https://yourstory.com/the-decrypting-story/nft-startup-artfi-funding-fine-arts-marketplace-web3-metaverse/amp"
    },
   

]

const images2 = [
    {
        src:"/Publiced/Financial Express.svg",
        // width:"290px"
        link:"https://www.financialexpress.com/blockchain/making-the-most-of-fine-art-as-a-digital-asset/2672227/"
    },
    {
        src:"/Publiced/Gulf Today.svg",
        // width:"260px"
        link:"https://www.gulftoday.ae/business/2022/07/26/art-for-everyone-sculpting-with-technology-the-idea-of-democratising-the-$1-8-trillion-asset-class"

    },
    {
        src:"/Publiced/Entrepeneur.svg",
        // width:"200px"
        link:"https://www.entrepreneur.com/article/432125"
    }
]

const images3 = [
    {
        src:"/Publiced/Business Insider.svg",
        // width:"180px"
        link:"https://www.google.com/amp/s/www.businessinsider.in/cryptocurrency/news/a-web3-startup-making-nfts-of-picasso-and-m-f-husain-art-receives-funding/amp_articleshow/93164882.cms"
    },
    {
        src:"/Publiced/Forbes.svg",
        // width:"180px"
        link:"https://www.forbesindia.com/article/crypto-made-easy/web3-startup-making-nfts-of-picasso-and-hussains-art-receives-funding/78523/1"
    },
    {
        src:"/Publiced/Gulf News.svg",
        // width:"230px"
        link:"https://gulfnews.com/amp/photos/business/photos-accolades-for-15-winners-at-gulf-news-web3-awards-2022-1.1656324319311"
    },
    {
        src:"/Publiced/MoneyControl.svg",
        // width:"100px"
        link:"https://www.moneycontrol.com/news/business/cryptocurrency/nft-fractionalism-will-make-fine-art-popular-among-millennials-say-experts-9198551.html"
    }
]

export const Featured = ({}: FeaturedProps): JSX.Element => {

return(
    <div className={styles.container}>
      <div className={styles.styleText}>Featured In</div>
     <div className={styles.innerContainer} > 
     {/* <div style={{width:"100%"}}> */}
        {
            images.map((data, index)=>{
                return(
                 
                  <a href={data.link} target="_blank" className={styles.card}><img src={data.src}   className={styles.img}/></a>
                )
            })
        }
       

      {/* </div> */}
      </div>
      <div className={styles.innerContainer} > 
     {/* <div style={{width:"100%"}}> */}
        {
            images2.map((data,index)=>{
                return(
                  <a href={data.link} target="_blank" className={styles.card1}><img src={data.src}   className={styles.img}/></a>
                )
            })
        }
       

      {/* </div> */}
      </div>
      <div className={styles.innerContainer}> 
     {/* <div style={{width:"100%"}}> */}
        {
            images3.map((data,index)=>{
                return(
                 
                  <a href={data.link} target="_blank" className={styles.card2}><img src={data.src}  className={styles.img}/></a>
                )
            })
        }
       

      {/* </div> */}
      </div>
            <div className={styles.mobile} style={{ marginTop: "-30px"}}>
                    <div style={{display:"flex",gap:"40px",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"40px"}}>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.cnbctv18.com/startup/funding-rundownspotnana-raises-75-million-pricelabs-raises-30-million-atato-secures-6-million--shilpa-shetty-invests-in-fastup-and-chicnutrix-14303592.htm" target="_blank"><img  src="/Publiced/CNBC.svg"/></a></div>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.arabianbusiness.com/money/wealth/alternative-assets/uae-investors-bet-on-indian-nft-startup-as-it-raises-3-2-million?fbclid=IwAR3hvsBMN5kGpnl-yA2Y3SY2v-8MQ0hqWEWMJfi6rPir1NzFZEReFzs4zSU" target="_blank"><img src="/Publiced/Arabian Business.svg"/></a></div>
                    </div>
                    <div style={{display:"flex",gap:"40px",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"40px"}}>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://timesofindia.indiatimes.com/blogs/voices/how-does-india-fare-in-terms-of-fine-art-nfts/" target="_blank"><img width="50%" src="/Publiced/Times of India.svg"/></a></div>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://yourstory.com/the-decrypting-story/nft-startup-artfi-funding-fine-arts-marketplace-web3-metaverse/amp" target="_blank"><img width="50%" src="/Publiced/Your Story.svg"/></a></div>
                    </div>
            </div>
            <div className={styles.mobile}>
      
                    <div style={{display:"flex",gap:"40px",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"40px"}}>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.financialexpress.com/blockchain/making-the-most-of-fine-art-as-a-digital-asset/2672227/" target="_blank"><img width="80%" src="/Publiced/Financial Express.svg"/></a></div>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.gulftoday.ae/business/2022/07/26/art-for-everyone-sculpting-with-technology-the-idea-of-democratising-the-$1-8-trillion-asset-class" target="_blank"><img width="80%" src="/Publiced/Gulf Today.svg"/></a></div>
                    </div>
                    <div style={{display:"flex",gap:"40px",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"40px"}}>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.entrepreneur.com/article/432125" target="_blank"><img width="80%" src="/Publiced/Entrepeneur.svg"/></a></div>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.google.com/amp/s/www.businessinsider.in/cryptocurrency/news/a-web3-startup-making-nfts-of-picasso-and-m-f-husain-art-receives-funding/amp_articleshow/93164882.cms" target="_blank"><img width="60%" src="/Publiced/Business Insider.svg"/></a></div>
                    </div>
            </div>
            <div className={styles.mobile} style={{ marginBottom: "100px"}}>
                    <div style={{display:"flex",gap:"40px",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"40px"}}>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.forbesindia.com/article/crypto-made-easy/web3-startup-making-nfts-of-picasso-and-hussains-art-receives-funding/78523/1" target="_blank"><img width="60%" src="/Publiced/Forbes.svg"/></a></div>
                        <div style={{width:"300px",height:"fit-content"}}><a href="https://gulfnews.com/amp/photos/business/photos-accolades-for-15-winners-at-gulf-news-web3-awards-2022-1.1656324319311" target="_blank"><img width="80%" src="/Publiced/Gulf News.svg"/></a></div>
                    </div>
                    <div style={{display:"flex",gap:"40px",marginTop:"40px", justifyContent:"center",alignItems:"center"}}>
                        <div style={{width:"300px",height:"fit-content" }}><a href="https://www.moneycontrol.com/news/business/cryptocurrency/nft-fractionalism-will-make-fine-art-popular-among-millennials-say-experts-9198551.html" target="_blank"><img width="80%" src="/Publiced/MoneyControl.svg"/></a></div>
                        {/* <div style={{width:"150px",height:"150px"}}><a href="" target="_blank"><img width="100%" src="/Publiced/MoneyControl.svg"/></a></div> */}
                    </div>
            </div>

    </div>
)

}