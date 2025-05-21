// src/component/Skill.js

import styles from '../styles/Skills.module.css';

export default function Skills() {
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
          <h2 className={styles['subsection-title']}>Skills</h2>
          <div className={styles['skills-container']}>
            <span className={styles.skillBubble}>JavaScript</span>
            <span className={styles.skillBubble}>JavaScript</span>
            <span className={styles.skillBubble}>JavaScript</span>
            <span className={styles.skillBubble}>JavaScript</span>
            <span className={styles.skillBubble}>JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}
