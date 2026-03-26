import React from "react";
import { Link } from "react-router-dom";
import { Globe, User, LogOut } from "lucide-react"; // Ikonkalar uchun

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="logo">
        <Link to="/">🍳 Retseplar Dunyosi</Link>
      </div>

      <ul className="nav_links">
        <li>
          <Link to="/">Bosh sahifa</Link>
        </li>
        <li>
          <Link to="/all-recipes">Barcha Retseptlar</Link>
        </li>
        <li>
          <Link to="/favorites">Sevimli</Link>
        </li>
      </ul>

      <div className="nav_actions">
        <div className="language_switcher">
          <button>UZ</button>
          <button>RU</button>
          <button>EN</button>
        </div>

        <div className="user_profile">
          <Link title="Profil" to="/profile">
            <div className="user_avatar">A</div>
          </Link>
          <button className="logout_btn" title="Chiqish">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
