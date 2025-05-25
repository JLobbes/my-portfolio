// src/components/MidwayInterlude.js

import styles from '../styles/MidwayInterlude.module.css';

export default function MidwayInterlude() {
  return (
    <div className={styles['midway-interlude']}>
        <div className={styles['blurb-wrapper']}>
          <p className={styles.text}>Recent Graduate.</p>
          <p className={styles.text}>Based in Taiwan.</p>
          <p className={styles.text}>Open to U.S. remote roles.</p>
        </div>

        <div className={styles['links-container']}>
          <div className={styles['links-wrapper']}>
            <a className={styles.link} href="https://github.com/JLobbes" target='_blank'>
              <img className={styles.img} src="images/github_logo.png" />
            </a>
            <a className={styles.link} href="https://www.linkedin.com/in/jared-lobbestael-398624361/" target='_blank'>
              <img className={styles.img} src="images/linked_in_logo.png" />
            </a>
          </div>
          <p className={styles.text}>Click a link.</p>
        </div>
    </div>
  );
}