import React from 'react'
import HeroSection from '../components/nft/HeroSection'
// import Footer from '../components/reusables/Atoms/Footer2'
// import Footer from '../components/reusables/Atoms/Footer'
import { Head, Navigation } from '../components/reusables/Components'
import Footer from '../components/reusables/Components/Footer2'
import NavArtfiOnly from '../components/reusables/Components/Navigation/NavArtfiOnly'

// import styles from "../styles/Home.module.scss";

const Nft = () => {
  return (
    <div >
      <Head title="Artfi | Nft" />
      <NavArtfiOnly/>
      <div style={{marginTop:"80px"}}>
        <HeroSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default Nft

