import Image from 'next/image'
import styles from './powerdBy.module.scss'

const PowerdBy = () => {
  return (
    <div className={styles.innerfooter}>
       <div className={styles.footer}>
        <div className={styles.powerd}><a href="#" target="_blank"><Image src="/Publiced/Powered by.svg" alt="Powerd By" width="107px" height="24px" /></a></div>
        <div className={styles.as}><a href="https://alturaashart.com/" target="_blank"><Image className={styles.pow}src="/Publiced/As.svg" alt="alturaash" width="258px" height="53.79px" /></a></div>
        <div className={styles.as}><a href="https://ethereum.org/en/" target="_blank"><Image src="/Publiced/et.svg" alt="Pol" width="175.42px" height="37.32px"  /></a></div>
        <div className={styles.polygon}><a href="https://polygon.technology/" target="_blank"><Image src="/Publiced/Pol.svg" alt="Pol" width="175.42px" height="37.32px"  /></a></div>

      </div>
      </div>
  )
}

export default PowerdBy
