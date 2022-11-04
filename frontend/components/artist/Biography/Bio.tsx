import React from 'react'
import styles from "./bio.module.scss"

const Bio = () => {
  return (
    <div className={styles.bio}>
        <h1>Biography</h1>
        <div>
            <p>
                 Vasudeo Santu Gaitonde, born on 1924 in Nagpur, Maharashtra to Goan parents, was regarded as one of India’s foremost abstract painters. He was an artist of singular stature and was known to fellow artists and intellectuals as well as to later generations of students and admirers, as a man of uncompromising integrity of spirit and purpose. A man who never addresses the camera, Gaitonde’s stringent attachment to the codes of painting and the ethics of being a painter distinguised his aesthetic worldview. Short, stocky, self-critical, and confident, Gaitonde scorned sentimentality in his biography and his artistic practice. He was a man of few words and an avid admirer of Indian and Western classical music, poetry, cinema, literature and theater who dedicated his life to painting.
            </p>
            <label>Read more</label>
        </div>
      
    </div>
  )
}

export default Bio
