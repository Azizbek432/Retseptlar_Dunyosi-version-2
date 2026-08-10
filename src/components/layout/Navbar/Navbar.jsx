import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LogOut, Search, ChevronDown } from 'lucide-react';
import './Navbar.css'; // ✅ Module o'rniga oddiy CSS

const Navbar = ({ onSearchClick }) => { 
  const navigate = useNavigate();
  const [recipesMenuOpen, setRecipesMenuOpen] = useState(false);

  const categories = [
    { name: "Milliy taomlar", icon: "🍲" },
    { name: "Shirinliklar", icon: "🍰" },
    { name: "Tezkor taomlar", icon: "🍕" },
    { name: "Parhez taomlar", icon: "🥗" },
    { name: "Bayramona", icon: "🎂" },
    { name: "Salatlar", icon: "🥬" },
  ];

  const handleSearchClick = () => {
    if (onSearchClick) {
      onSearchClick();
    } else {
      navigate('/');
      setTimeout(() => {
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          searchInput.focus();
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <span className="logo-icon">🍽️</span>
            <div className="logo-text">
              <p className="logo-subtitle">RETSEPLAR</p>
              <span className="logo-title">DUNYOSI</span>
            </div>
          </Link>
        </div>

        {/* Menu */}
        <ul className="navbar-menu">
          <li className="menu-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Bosh sahifa
            </NavLink>
          </li>
          
          {/* Dropdown */}
          <li 
            className="menu-item dropdown"
            onMouseEnter={() => setRecipesMenuOpen(true)}
            onMouseLeave={() => setRecipesMenuOpen(false)}
          >
            <NavLink to="/recipes" className={({ isActive }) => isActive ? 'active' : ''}>
              Retseptlar
              <ChevronDown size={16} className={`dropdown-icon ${recipesMenuOpen ? 'rotate' : ''}`} />
            </NavLink>
            
            <ul className={`dropdown-menu ${recipesMenuOpen ? 'show' : ''}`}>
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link 
                    to={`/recipes?category=${encodeURIComponent(cat.name)}`}
                    className="dropdown-item"
                    onClick={() => setRecipesMenuOpen(false)}
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </Link>
                </li>
              ))}
              <li className="dropdown-divider"></li>
              <li>
                <Link 
                  to="/recipes"
                  className="dropdown-item"
                  onClick={() => setRecipesMenuOpen(false)}
                >
                  🔍 Barcha retseptlar
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="menu-item">
            <NavLink to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}>
              Sevimli
            </NavLink>
          </li>
        </ul>

        {/* O'ng tomon */}
        <div className="navbar-actions">
          <button className="search-btn" onClick={handleSearchClick}>
            <Search size={20} />
          </button>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;