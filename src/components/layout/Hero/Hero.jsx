import React from 'react';
import { Search } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = ({ searchRef }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.badge}>
          <span>✦</span> Minglab mazali retseptlar
        </div>

        <h1 className={styles.title}>
          BUGUN NIMA <br />
          <span className={styles.highlight}>PISHIRAMIZ?</span>
        </h1>

        <p className={styles.subtitle}>
          Minglab mazali va oson retseptlar bir joyda.
        </p>

        <div className={styles.searchBox}>
          <div className={styles.inputWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              ref={searchRef}
              type="text" 
              placeholder="Tovuqli taomlar yoki shirinliklar deb qidiring..." 
              className={styles.input}
            />
          </div>
          <button className={styles.searchBtn}>QIDIRISH</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;