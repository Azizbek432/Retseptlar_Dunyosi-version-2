import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = ({ searchRef }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // ✅ Qidiruv natijalarini AllRecipes sahifasiga yuborish
      navigate(`/recipes?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

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

        <form onSubmit={handleSearch} className={styles.searchBox}>
          <div className={styles.inputWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              ref={searchRef}
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tovuqli taomlar yoki shirinliklar deb qidiring..." 
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.searchBtn}>QIDIRISH</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;