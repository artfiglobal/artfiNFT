import Image from 'next/image'
import React from 'react'
import styles from "./profile.module.scss"

type profileValue = {
    title:string,
    value:string
}

const Profile = () => {

    const ProfileData = ({title,value}:profileValue)=>{

        return(
                <div>
                    <h5>{title}</h5>
                    <label className={styles.profileInfo_p}>{value}</label>
                </div>
                
                )

    }
  return (
    <section className={styles.profileSection}>
        <div><Image src="/Artist/vsgaitonde.svg" width={583} height={675}/></div>
        <div>
            <h6>VERIFIED ARTIST<Image src="/Publiced/Vector.svg" width={24} height={24}/></h6>
            <h4>Vasudeo S. Gaitonde</h4>
            <p>
            Vasudeo S. Gaitonde (V. S. Gaitonde) (1924–2001) was regarded as one of India's foremost abstract painters. He received the Padma Shri Award in 1971.
            </p>
            <div className={styles.profileInfo}>
                <ProfileData title="born" value="1924 (Maharashtra)"/>
                <ProfileData title="Died" value="10 August 2001 (aged 77)"/>

            </div>
            <div className={styles.profileInfo}>
                <ProfileData title="Known for" value="Abstract Painting"/>
                <ProfileData title="Nationality" value="Indian"/> 
            </div>
        </div>
    </section>
  )
}

export default Profile
