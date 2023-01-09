import { useRef, useState } from "react";
import { FaPause, FaPlay, FaTimes } from "react-icons/fa";
import styles from "./Whitelist.module.scss";

const Whitelist = ({ setIsOpen, isOpen, referralCode }) => {
  const videoRef = useRef();

  const [playing, setIsPlaying] = useState(false);
  const playVideo = () => {
    setIsPlaying(!playing);

    playing ? videoRef.current.pause() : videoRef.current.play();
  };
  return (
    <div className={styles.whitelist}>
      <video
        onClick={() => playVideo()}
        ref={videoRef}
        // controls={true}
        preload={"auto"}
        type={"video/mp4"}
        // style={{background:"black"}}
        poster="/Background/vp.png"
      >
        <source src="https://artfi.s3.ap-south-1.amazonaws.com/Artfi+Blue+Chip+NFT+With+Closer.mp4" />
      </video>
      <div className={styles.playBtn}>
       
      </div>
      <div className={styles.spacer}></div>
      {/* {!playing && (
        <div className={styles.whitelist_container}>
          <Typography color="black" variant="body">
            Discover, Collect & Invest in Fine Arts.
          </Typography>
          <button className={styles.waitBtn} onClick={() => setIsOpen(!isOpen)}>
            Waitlist
          </button>
        </div>
      )} */}
      {/* <div
        className={`${styles.whitelist_container} ${styles.mobile_whitelist_container}`}
      >
        <Typography color="black" variant="body">
          Discover, Collect & Invest in Fine Arts.
        </Typography>
        <button className={styles.waitBtn} onClick={() => setIsOpen(!isOpen)}>
          Waitlist
        </button>
      </div> */}
    </div>
  );
};

export default Whitelist;
