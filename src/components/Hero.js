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
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.fillerBlock}>
        <path d="
                M 15 2 
                C 16 0 17 0 17 0
                L 98 0 
                C 99 0 100 1 100 2 
                V 98 
                C 100 99 99 100 98 100 
                H 2 
                C 1 100 0 99 0 97
              "
                
              className={styles.path}
        />
      </svg>
    </div>
  );
}