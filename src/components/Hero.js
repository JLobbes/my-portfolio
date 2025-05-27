// src/components/Hero.js

import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.nameCardContainer}>
        <div className={styles['hero-logo']}>
          <img src='/images/hero_logo.png' />
        </div>
        <div className={styles.nameCard} >
          <h1>Jared Lobbestael</h1>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.separator}>
            <path d="
                    M 0 0 
                    L 100 0 
                    L 100 100 
                    L 0 100
                  " 
                  className={styles.path}
            />
          </svg>
          <h2>Junior Web Developer</h2>
        </div>
      </div>
      
      <div className={styles['filler-blocks-wrapper']}>        
        <svg viewBox="0 0 90 300" preserveAspectRatio="none" className={styles['fillerBlock-triangle']}>
          <path d="
                  M 47 4 
                  C 48 0 50 0 52 0 
                  L 90 0 V 300 H 4 
                  C 3 300 0 299 1 296
                "
                className={styles.path}
          />
        </svg>

        <div className={styles['fillerBlock-rectangle']}></div>
      </div>
      
    </div>
  );
}