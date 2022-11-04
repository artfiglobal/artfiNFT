import Image from 'next/image'
import React from 'react'
import CarouselComponent from '../components/artist/Carousel/Carousel'
import Profile from '../components/artist/Profile'
import { Navigation } from '../components/reusables/Components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Bio from '../components/artist/Biography/Bio'
import Achievements from '../components/artist/Achievements/Achievements'
import NavArtfiOnly from '../components/reusables/Components/Navigation/NavArtfiOnly'

const artistDetails = () => {
  return (
    <div>
        <NavArtfiOnly/>
        <Profile/>
        <CarouselComponent/>
        <Bio/>
        <Achievements/>
      
    </div>
  )
}

export default artistDetails
