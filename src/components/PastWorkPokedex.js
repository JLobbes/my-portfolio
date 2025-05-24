// src/components/PastWorkPokedex.js

"use client"

import { useState } from 'react';
import styles from '../styles/PastWorkPokedex.module.css';

export default function PastWorkPokedex() {
  return (
    <div className={styles.pokedex}>

      <div className={`${styles.panel} ${styles['left-panel']}`}>
        <div className={`${styles['project-title-block']}`} >
          <h2 className={`${styles['project-title']}`}>ScrollerCat</h2>
          <h3 className={`${styles['project-date']}`}>YYYY MMM</h3>
        </div>

        <div className={`${styles['project-description-block']}`} >
          <span className={`${styles['project-title']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.
          </span>
        </div>

      </div>

      <div className={`${styles.panel} ${styles['center-panel']}`}>
        <div className={`${styles['panel-join-mask-top']}`}></div>
        <div className={`${styles['hidden-spacer']}`}></div>
        <div className={`${styles['tv-screen']}`}></div>
      </div>

      <div className={`${styles.panel} ${styles['right-panel']}`}>
        <div className={`${styles['sectionHeading-cutOut']}`}>
          <svg viewBox="-7 0 456.9 55" preserveAspectRatio="none" className={styles['cutOut-polygon']}>
            <path d="
                 M 2 6
                 C-2 2-2 1-7 0
                 L 447 0 
                 C 449 0 450 1 450 3
                 L 450 55
                 C 450 51 449 50 447 50
                 L 48 50
                 C 46 50 45 49 43 47
                 Z
                  " 
                  className={styles.path}
            />
          </svg>

          <div className={styles['sectionHeading-wrapper']} >
            <svg viewBox="0 0 200 50" preserveAspectRatio="none" className={styles['attached-polygon']}>
              <path d="
                      M 2 6 
                      C -2 2 1 0 3 0 
                      L 197 0 
                      C 199 0 200 1 200 3 
                      L 200 47 
                      C 200 49 199 50 197 50 
                      L 48 50 
                      C 46 50 45 49 43 47 
                      Z
                    " 
                    className={styles.path}
              />
            </svg>
            <h1 className={styles.sectionHeading}>Past Projects</h1>
          </div>
        </div>

        <div className={`${styles['project-list-wrapper']}`}>
          <div className={`${styles['project-list']}`}>
            {/* projects go here */}
          </div>

          <div className={`${styles['button-container']}`}>
            <button className={`${styles.button} ${styles['up-button']}`}>
              <img className={`${styles.img}`} src="images/downward_caret_double_icon.png" />
            </button>
            <button className={`${styles.button} ${styles['down-button']}`}>
              <img className={`${styles.img}`} src="images/downward_caret_double_icon.png" />
            </button> 
          </div>
        </div>
      </div>

      <div className={`${styles['panel-join-mask-bottom']}`}></div>
    </div>
  );
}