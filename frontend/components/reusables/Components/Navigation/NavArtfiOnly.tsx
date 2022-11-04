import Link from 'next/link';
import React from 'react'
import styles from "./Navigation.module.scss";


const NavArtfiOnly = () => {
  return (
    <nav className={styles.container} style={{paddingLeft:"120px"}}>
    
        <Link href="/" passHref>
        <img
          style={{ cursor: "pointer" }}
          src="/images/reusables/Artfi.png"
          alt="Artfi"
          className={styles.logo}
          height={30}
          width={75}
        />
      </Link>
    </nav>
  )
}

export default NavArtfiOnly
