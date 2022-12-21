import React from 'react'
import style from './card.module.scss'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Button } from '@mui/material';
 
const HeaderCard = ({headerData}:any) => {
  console.log(headerData,"headerData")
  return (
    <div style={{display:"inline-block"}}>
        <div style={{position:"relative"}} className={style.card}>
            <img src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${headerData.headerDetails.chooseImageOfArtWork}`} width="100%" height="230px"/>
            <div className={style.cardHead}>
                <div className={style.heartContainer}>
                     <FavoriteBorderSharpIcon style={{color:"white"}}/>
                </div>
                <div className={style.heartContainer}>
                     <MoreHorizIcon style={{color:"white"}}/>
                </div>              
            </div>
            <div style={{padding:"0 20px"}}>
            <div style={{display:"flex",justifyItems:"center",alignItems:"center",gap:"8px"}}>
                <Avatar src=""/>
                 <div className={style.artist}>{headerData.headerDetails.artistName}</div>
                <img src="/Icons/right.png"/>
            </div>
            <div className={style.name}>{headerData.headerDetails.Title}</div>
            <div className={style.price_date_container}>
              <div ><div><img src="/Icons/price.png"/></div>
              <div className={style.card_price}> {headerData.whitelistDetails?"$"+headerData.whitelistDetails.price:headerData.headerDetails.price}</div>
              </div>
              
              
              <div className={style.whitelist}>{headerData.whitelistDetails?<button className={style.btn}>Whitelist</button>:<><p>Whitelist Start</p><span>20 Feb, 2022</span></>}</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeaderCard
