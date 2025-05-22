// src/component/Skill.js

"use client"

import { useState } from 'react';
import styles from '../styles/Skills.module.css';

export default function Skills() {
  const [showFamiliarWith, setShowFamiliarWith] = useState(false);

  return (
    <div className={styles['skills-page']}>
      <div className={styles.fillerBlock}></div>
      <div className={styles.skillsContent}>
        <div className={styles['skillsContent-subsection']}>
          <h2 className={styles['subsection-title']}>Skills</h2>
          <div className={styles['skills-container']}>
            <span className={styles.skillBubble}>JavaScript</span>
            <span className={styles.skillBubble}>React</span>
            <span className={styles.skillBubble}>Node.js</span>
            <span className={styles.skillBubble}>HTML</span>
            <span className={styles.skillBubble}>CSS</span>
            <span className={styles.skillBubble}>SQL</span>
            <span className={styles.skillBubble}>MariaDB</span>
            <span className={styles.skillBubble}>Firebase</span>
          </div>
        </div>

        <div className={styles['skillsContent-subsection']}>
          <h2 className={styles['subsection-title']}>Tools</h2>
          <div className={styles['skills-container']}>
            <span className={styles.skillBubble}>Git</span>
            <span className={styles.skillBubble}>Vonage</span>
            <span className={styles.skillBubble}>PostMark</span>
            <span className={styles.skillBubble}>Stripe</span>
            <span className={styles.skillBubble}>Ubuntu CLI</span>
            <span className={styles.skillBubble}>GIMP</span>
          </div>
        </div>

        <div className={styles['skillsContent-subsection']}>
          <h2 
            className={`${styles['subsection-title']} ${!showFamiliarWith ? styles.halfOpacity : styles.show}`}
          >
            {showFamiliarWith ? 'Familiar With' : 'More'}
          </h2>
          <div className={styles['skills-container']}>
            <span
              className={`${styles.skillBubble} ${styles.halfOpacity}`}
              onClick={() => setShowFamiliarWith(prev => !prev)}
            >
              {showFamiliarWith ? 'Show Less' : 'Click Here'}
            </span>

            <span
              className={`${styles.skillBubble} ${showFamiliarWith ? styles.show : styles.hide}`}
            >
              Bootstrap
            </span>
            <span
              className={`${styles.skillBubble} ${showFamiliarWith ? styles.show : styles.hide}`}
            >
              PHP
            </span>
            <span
              className={`${styles.skillBubble} ${showFamiliarWith ? styles.show : styles.hide}`}
            >
              Flutter/Dart
            </span>
            <span
              className={`${styles.skillBubble} ${showFamiliarWith ? styles.show : styles.hide}`}
            >
              Android Studio
            </span>
            <span
              className={`${styles.skillBubble} ${showFamiliarWith ? styles.show : styles.hide}`}
            >
              Express.js
            </span>
            <span
              className={`${styles.skillBubble} ${showFamiliarWith ? styles.show : styles.hide}`}
            >
              Axios
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
