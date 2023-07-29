import Header from "../components/Header"

import { GenderFemale, Books, AddressBook } from 'phosphor-react'

import foto from '../assets/foto.png'

import styles from '../styles/pages/home.module.css'


const Home = () => {
  return (
    <>
      <Header 

        headerId="homeHeader"
         image={foto} 
            
    />
 <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <GenderFemale size={150} color="#A6A6A6" weight="thin"/>
          <h2 className={styles.cardTitle}></h2>
         
        </div>
        <div className={styles.cardContainer}>
          <Books size={150} color="#A6A6A6" weight="thin"/>
          <h2 className={styles.cardTitle}></h2>
         
       
         
        </div>
      </div>

      
      
    </>
    
  )
}

export default Home
