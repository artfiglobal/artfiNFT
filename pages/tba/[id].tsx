import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Link from "next/link";

import styles from "../../styles/tba.module.scss";
import { Navigation } from "../../components/reusables/Components";
import Modal from "../../components/reusables/Components/Modal";

const tba = () => {
  const { query, isReady } = useRouter();
  const [id, setId] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [header, setHeader] = useState<any>({});
  useEffect(() => {
    if (isReady) {
      getData();
    }
  }, [isReady]);

  async function getData() {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getoffering/${query.id}`
    );
    console.log(res.data, "resss");
    setHeader(res.data.data.offering);
    setId(true);
    console.log(res);
  }

  return (
    <>
      <Navigation />
      <div style={{ position: "absolute", top: 0 }}>
        {" "}
        {isOpen && (
          <Modal artistId={header.artistId} offeringId={query.id} UserRedirectFrom= "Register-Your-Intrest" referralCode={""} setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </div>
      <div className={styles.tba}>
        <div>
          <div className={styles.cs}>COMING SOON</div>
          <div className={styles.title}>
            {id ? header.headerDetails.Title : "A Life on Canvas"}
          </div>
          <div className={styles.by}>
            {" "}
            by{" "}
            <Link className={styles.name} href={`/artist/${query.id}`}>
              {id == true ? header.headerDetails.artistName : "SACHA JAFRI"}
            </Link>
            {/* <span className={styles.name}>
            </span>{" "} */}
            {
              id && header.IsActive ?
              <Image alt="right" src="/Icons/right.svg" width="20px" height="20px" />
              : <></>
            }
          </div>
          <div>
            <Button
              className={styles.waitlist_btn}
              style={{ textTransform: "capitalize" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Waitlist now */}
              Register your interest
            </Button>
          </div>
        </div>
        <div>
          {
            id ? 
            <Image
              src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${header.headerDetails.chooseImageOfArtWork}`}
              className={styles.img}
              alt="headerdetails"
            /> : <></>
          }
        </div>
      </div>
    </>
  );
};

export default tba;
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
