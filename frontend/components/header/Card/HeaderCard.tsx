import React from 'react'
import style from './card.module.scss'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Button } from '@mui/material';
import Timer2 from '../../Home2/Timer2';
 
const HeaderCard = ({headerData}:any) => {
  console.log(headerData,"headerData")
  return (
    <div style={{display:"inline-block"}}>
        <div style={{position:"relative"}} className={style.card}>
            <img src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${headerData.offeringData
.headerDetails.chooseImageOfArtWork}`} width="100%" height="230px"/>
            <div className={style.cardHead}>
                <div className={style.heartContainer}>
                     <FavoriteBorderSharpIcon style={{color:"white"}}/>
                </div>
                <div className={style.heartContainer}>
                     <MoreHorizIcon style={{color:"white"}}/>
                </div>              
            </div>
            <div style={{padding:"0 20px"}}>
              <div style={{position:"absolute", top:"200px", background:"white",padding:"5px 10px",borderRadius:"20px"}}>
                
             {headerData?.offeringData
.whitelistDetails? <Timer2 endDate={headerData?.offeringData
.whitelistDetails.endDate} />:""}
              </div>
            <div style={{display:"flex",justifyItems:"center",alignItems:"center",gap:"8px"}}>
                <Avatar src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${headerData.artistImage}`}/>
                 <div className={style.artist}>{headerData.offeringData.headerDetails.artistName}</div>
                 {headerData.IsArtistVerified? <img src="/Icons/right.png"/>:""}
            </div>
            <div className={style.name}>{headerData.offeringData
.headerDetails.Title}</div>
            <div className={style.price_date_container}>
              <div ><div><img src="/Icons/price.png"/></div>
              <div className={style.card_price}> {headerData.offeringData
.whitelistDetails?"$"+headerData.offeringData
.whitelistDetails.price:headerData.offeringData
.headerDetails.price}</div>
              </div>
              
              
              <div className={style.whitelist}>{headerData.offeringData
.whitelistDetails?headerData.IsOnGoingOffering?"":<button className={style.btn}>Whitelist</button>:<><p>Whitelist Start</p><span>20 Feb, 2022</span></>}</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeaderCard
