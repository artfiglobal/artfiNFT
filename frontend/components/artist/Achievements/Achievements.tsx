import React from 'react'
import styles from "./achievements.module.scss"
type Description = {
year:string,
description:string
}
const Achievements = () => {

    const Achievement = ({year,description}:Description) => {
       return(<div className={styles.achievement}>
          <label>{year}</label>
          <p>{description}</p>
       </div>)
    }
  return (
    <div className={styles.achiebements}>
      <h1>Achievements</h1>
      
      <div className={styles.achivementBlock}>        
           <Achievement year="1950" description="Silver Medal, Bombay Art Society, Bombay." />
           <Achievement year="1957" description="Young Asian Artists Award, Tokyo." />
           <Achievement year="1971" description=" Padma Shri by Government of India." />
           <Achievement year="1964-65" description="Rockefeller Fellowship, USA" />
           {/* <Achievement year="1950" description="Silver Medal, Bombay Art Society, Bombay." /> */}  
      </div>

      <div>
      <Achievement year="1989-90" description=" Kalidas Samman, Government of Madhya Pradesh" />

      </div>
      
    </div>
  )
}

export default Achievements
