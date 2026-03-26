import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LogOut, Search } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // Active klassini aniqlash uchun funksiya
  const activeClass = ({ isActive }) => 
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo qismi */}
        <div className={styles.logo}>
          <Link to="/">
            <div className={styles.logoIcon}>🍽️</div>
            <div className={styles.logoText}>
              <p>RETSEPLAR</p>
              <span>DUNYOSI</span>
            </div>
          </Link>
        </div>

        {/* Menyu qismi */}
        <ul className={styles.menu}>
          <li className={styles.navItem}>
            <NavLink to="/" className={activeClass}>Bosh sahifa</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/categories" className={activeClass}>Kategoriyalar</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/new" className={activeClass}>Yangilar</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/blog" className={activeClass}>Blog</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/contact" className={activeClass}>Aloqa</NavLink>
          </li>
        </ul>

        {/* Tugmalar va Profil */}
        <div className={styles.btnContainer}>
          <button className={styles.searchBtn} aria-label="Qidirish">
            <Search size={20} />
          </button>

          <Link to="/profile" className={styles.profileBtn}>
            <div className={styles.avatar}>
              <img src="https://i.pravatar.cc/150?u=azizbek" alt="User" />
            </div>
            <span className={styles.welcomeText}>
              Xush kelibsiz, <b>Azizbek!</b>
            </span>
          </Link>

          <button className={styles.logoutBtn} title="Chiqish">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;