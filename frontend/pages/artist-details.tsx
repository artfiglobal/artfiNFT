import Image from 'next/image'
import React from 'react'
import CarouselComponent from '../components/artist/Carousel/Carousel'
import Profile from '../components/artist/Profile'
import { Navigation } from '../components/reusables/Components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const artistDetails = () => {
  return (
    <div>
        <Navigation/>
        <Profile/>
        <CarouselComponent/>
      
    </div>
  )
}

export default artistDetails
