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

            <div className={styles.imgBlock}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <Card/>
                    <div style={{marginTop:"-30px"}}>
                    <Image src="/Background/ellipse.svg" alt="ellipose"  width="528px" height="60px"/></div>
                </div>
                </div>
        </section>
    </div>
  )
}

export default HeroSection
