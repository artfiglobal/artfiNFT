import Image from 'next/image'
import React from 'react'
import styles from './Carousel.module.scss'
const image = [
  "/Artist/slider1.svg",
  "/Artist/slider1.svg"

]

const CarouselComponent = () => {
  return (
    <div>
        <h1 className={styles.carouselTitle}>Highlights</h1>
        <div className={styles.carousel}>
          <div style={{width:"20%"}}>
            <Image src="/Icons/leftArrow.svg" width="60px" height="60px"/>
          </div>
            <div style={{width:"60%",overflow:"hidden",display:"flex"}}>
                 {/* <img src="/Artist/slider1.svg" width="100%"/> */}
                 {/* {
                  image.map((path,index)=>{
                      return(
                        <>
                          <img src={path} width="100%" height="100%" />
                        </>
                      )

                  })
                 } */}
                          <img src="/Artist/slider1.svg" width="100%" height="100%" />


            </div>
            <div style={{width:"20%"}}> 
                <Image src="/Icons/rightArrow.svg" width="60px" height="60px"/>
            
            </div>
        </div>

    </div>
  )
}

export default CarouselComponent
