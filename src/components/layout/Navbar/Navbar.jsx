import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Search, User } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link to="/">
            <span>🥘</span> Retseplar Dunyosi
          </Link>
        </h1>

        <ul className={styles.menu}>
          <li className={styles.navItem}>
            <Link to="/">Bosh sahifa</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/all-recipes">Retseptlar</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/favorites">Sevimli</Link>
          </li>
        </ul>

        <div className={styles.btnContainer}>
          <div className={styles.searchBtn}>
            <Search size={20} />
          </div>

          <div className={styles.profileBtn}>
            <Link
              to="/profile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  background: "#f3a61d",
                  padding: "4px 8px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                A
              </div>
              <span>Azizbek</span>
            </Link>
          </div>

          <button className={styles.kirishBtn} title="Chiqish">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
