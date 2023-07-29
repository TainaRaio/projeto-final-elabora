import styles from '../styles/components/footer.module.css'

import { Link } from 'react-router-dom' 

import imgfooter from '../assets/rodapeimg.png'

const Footer = ({content}) => {
  return (
    <footer className={styles.footerContainer}>
      
      <Link className={styles.footerContent} to="https://github.com/TainaRaio" target="_blank">{content}</Link>
     
    </footer>
  )
}

export default Footer
