import React,{useState} from 'react'
import HeroSection from '../components/nft/HeroSection'
// import Footer from '../components/reusables/Atoms/Footer2'
// import Footer from '../components/reusables/Atoms/Footer'
import { Head, Navigation } from '../components/reusables/Components'
import Footer from '../components/reusables/Components/Footer2'
import NavArtfiOnly from '../components/reusables/Components/Navigation/NavArtfiOnly'
import { offeringData } from "../lib/apis/offeringData";

// import styles from "../styles/Home.module.scss";
export async function getStaticProps() {
  const data = await offeringData();
 
  return {
    props: {
      data
    },
  };
}

const Nft = (props:any) => {
console.log(props.data.trueOfferings[0].nftDetails,"nft")
// const [nft, setNft] = useState(props.trueOffering[0])

  return (
    <div >
      <Head title="Artfi | Nft" />
      <NavArtfiOnly/>
      <div style={{marginTop:"80px"}}>
        <HeroSection nft={props.data.trueOfferings[0].nftDetails} artist={props}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Nft


