// src/app/page.js

import styles from "../styles/page.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Hero /> 
      </main>
    </div>
  );
}