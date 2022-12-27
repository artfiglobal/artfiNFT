import React, { useEffect, useState } from "react";
import styles from "../../styles/tba.module.scss";
import { useRouter } from "next/router";
import axios from 'axios';
import { Navigation } from '../../components/reusables/Components';
import { Button } from '@mui/material';
import Modal from "../../components/reusables/Components/Modal";


// console.log(window.location.href)

const tba = () => {
  // const router:any = useRouter();
  const {query,isReady} = useRouter()
  // console.log(router.query)
  const [id, setId] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [header, setHeader] = useState<any>({})
  useEffect(() => {
    if(isReady)
    {
      getData()
    }
  }, [isReady])

   async function getData(){
    const res = await axios.get(`${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getoffering/${query.id}`)
      console.log(res.data,"resss")
      setHeader(res.data.data.offering)
      setId(true)
      console.log(res)

    
   }
  
  return (
    <><Navigation />
        <div style={{position:"absolute",top:0}}>    {isOpen && (
        <Modal referralCode={""} setIsOpen={setIsOpen} isOpen={isOpen} />
      )}</div>
    <div className={styles.tba}>
      <div>
        <div className={styles.cs}>COMING SOON</div>
        <div className={styles.title}>{id?header.headerDetails.Title:"A Life on Canvas"}</div>
        <div className={styles.by}> BY <span className={styles.name}>{id == true?header.headerDetails.artistName:"SACHA JAFRI"}</span> {id?header.IsActive?<img src="/Icons/right.svg" width="20px" height="20px"/>:"":""}</div>
        <div><Button
            className={styles.waitlist_btn}
            style={{ textTransform: "capitalize" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Waitlist now
          </Button>
          </div>
      </div>
      <div>
         {id? <img src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${header.headerDetails.chooseImageOfArtWork}`} className={styles.img}/>:<img src=""/>}
      </div>
    </div>
   
  
    </>
  )
}

export default tba
// import React from 'react'

// const tba = () => {
//   const {query,isReady} = useRouter()
   
//   console.log(query,isReady)
//   return (
//     <div>
//       hii
//     </div>
//   )
// }

// export default tba

