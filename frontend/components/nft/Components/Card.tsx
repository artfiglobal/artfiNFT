import React from 'react'
import styles from "./card.module.scss"
import Image from 'next/image'

const Card = () => {
  return (
    <div className={styles.card}>
    <div className={styles.flipCard}>
    <div className={styles.flipCardInner}>
      <div className={styles.flipcardFront}>
        {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
        <Image src="/Panting/Panting1.svg" alt="ellipose" width="380px" height="512px"/>  
      </div>
      <div className={styles.flipCardBack}>
        <h1>John Doe</h1> 
        <p>Architect & Engineer</p> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Card
