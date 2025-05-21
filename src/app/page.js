// src/app/page.js

import styles from "../styles/page.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Hero /> 
        <Skills />
      </main>
    </div>
  );
}