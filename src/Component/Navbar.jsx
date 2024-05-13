import styles from "./Navbar.module.css"
import React from 'react'
import search from '../../src/assets/magnifying-glass-solid.svg'
import bars from '../../src/assets/search.png'


function Navbar(){
    
    return (
        
        <>
        <div className= {styles['navbar']}>
            <div className= {styles['left']}>
                <img className={styles['logo']} src="https://pinkivory.com/wp-content/uploads/2023/05/pink-ivory-logo.jpg"/>
            </div>
            <div className={styles['middle']}>
                <button className={styles['button']}>Home</button>
                <button className={styles['button']}>Process</button>
                <button className={styles['button']}>Services</button>
                <button className={styles['button']}>Potfolio</button>
                <button className={styles['button']}>Design Studio</button>
                <button className={styles['button']}>About Us</button>
                <button className={styles['button']}>BLog</button>
                <button className={styles['button']}>Contact Us</button>
            </div>
            <div className={styles['right']}>
                <img className={styles['magnify']} src={search}/>
                <img className={styles['magnify']} src={bars}/>
            </div>
        
        </div>
       
        </>
    )
}

export default Navbar