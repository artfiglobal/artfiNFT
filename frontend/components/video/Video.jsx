import { height } from '@mui/system'
import React,{useRef,useState} from 'react'
import styles from "./Video.module.scss"
const Video = () => {
    const videoRef = useRef();
    const videoRef2 = useRef();

    const [playing, setIsPlaying] = useState(false);
    const playVideo = () => {
        const elem = videoRef.current
      if(elem){ //checking if ref was initiated
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
      }
    };
    const playVideo2 = () => {
        setIsPlaying(!playing);
        
        // playing? videoRef2.current.controls = true:videoRef2.current.controls = false
        playing ? videoRef2.current.pause() : videoRef2.current.play();
    };
  return (
    <div>
  <div className={styles.home}>
  
    <video ref={videoRef} muted={"muted"} loop={"muted"} autoplay={"autoplay"}>
        <source src="/Publiced/video (1).mp4" type="video/mp4"/>
    </video>
   
      
    </div>
    <div className={styles.homeContent}>
    <img onClick={()=>playVideo()} className={styles.playagain} src="Publiced/play.svg"/>
    <h1>Floral Artwork</h1>
    <p className={styles.new}>NEW ARTWORK BY <label>VS GAITONDE</label><img src="/Publiced/Vector.svg"/></p>
       <div style={{display:"flex",justifyContent:"center"}}>
            <button>Whitelist now</button>
          
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <button className={styles.timer}>
                 <img src="Publiced/time.svg" />
                  <label>12h:43m:10s</label>
            </button>
      
        </div>
 
    </div>
    <div className={styles.outerFooter}> 
     
                   <img src="/Publiced/Powered by.svg" alt="Powerd By" className={styles.pwd} />
                   <img src="/Publiced/As.svg" alt="alturaash" className={styles.alturaash} />
                   <img src="/Publiced/Pol.svg" alt="alturaash" className={styles.polygon}/>

      </div>
      <div className={styles.whitelist}>
      <video ref={videoRef} muted={"muted"} loop={"muted"} autoplay={"autoplay"} style={{width:"100%"}} controls>
        <source src="/Publiced/video.mp4" type="video/mp4" />
      </video>
            <div style={{position:"relative"}}>
                    <div className={styles.position}>
                            <a href="/Publiced/video.mp4" target="_blank"> <img onClick={()=>playVideo2()} className={styles.watchimg}src="Publiced/play.svg"/></a>
                            <label className={styles.watch}>Watch now</label>
                    
                    </div>
            </div>
     </div>
      <div className={styles.redefining}>
        <h1>Redefining Fine Art Ownership</h1>
        <img src="/Publiced/Rectangle 391.svg"/>
        <p>Artfi is a financial and art technology company on a mission to democratize the $1.7 trillion fine art and collectibles market. By harnessing the power of NFTs and blockchain technology, Artfi allows investors to own a stake in some of the world's most sought-after works of art.
        </p>
      
      </div>

        
    
    </div>
  )
}

export default Video
