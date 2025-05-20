import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
