import React from "react";
import styles from './Footer.module.css'

function Footer(){
    return (
        <>
        <div className={styles['footer']}>
            <div className={styles['container']}>
                <div className={styles['logo']}>
                    <img className={styles['imagelogo']} src="https://pinkivory.com/wp-content/uploads/2023/05/pink-ivory-logo.jpg"/>
                    <p className={styles['tagline']}>We provides a full range of interior design, architectural design.</p>
                </div>
                <div className={styles['contact']}>
                    <p className={styles['footer-para']}>Contacts</p>
                    
                    <i class="fa-sharp fa-light fa-location-dot fa-flip-horizontal fa-2xl"></i>
                    <p className={styles['footer-para']}>1st Floor, No 1, 4th Cross Road off Sarjapur Road Kasavanahalli Village, Marathahalli, Bengaluru, Karnataka 560035</p>
                    <p className={styles['footer-para']}>hello@pinkivory.com</p>
                    <p className={styles['footer-para']}>9609688808</p>
                </div>
                <div className={styles['latest-project']}>
                    <p className={styles['footer-para']}>Latest Project</p>
                    <p className={styles['footer-para']}>Villa in 42 Queens</p>
                    <p className={styles['footer-para']}>Villa in Samruddhi Lake Drive</p>
                    <p className={styles['footer-para']}>Apartment in Prestige Lakeside</p>
                </div>
                <div className={styles['contact']}>
                <p className={styles['footer-para']}>Subscribe</p>
                    <input className={styles['input-class']} placeholder="Your Email"/>
                    <p className={styles['footer-para']}>Follow our newsletter to stay updated about agency.</p>
                </div>
                <div className={styles['subscribe']}>subscribe</div>
            </div>
        </div>
        </>
    )
}

export default Footer