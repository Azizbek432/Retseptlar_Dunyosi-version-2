import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryButton.css';

// src/components/common/CategoryButton/CategoryButton.jsx



const CategoryButton = ({ icon, foodName }) => {
  const categories = [
  { id: 1, icon: "🍲", name: "Milliy taomlar" },
  { id: 2, icon: "🍰", name: "Shirinliklar" },
  { id: 3, icon: "🍕", name: "Tezkor taomlar" },
  { id: 4, icon: "🥗", name: "Parhez taomlar" },
  { id: 5, icon: "🎂", name: "Bayramona" },
  { id: 6, icon: "🥬", name: "Salatlar" },
];
  return (
    <Link 
      to={`/recipes?category=${encodeURIComponent(foodName)}`} 
      className="cat-btn"
    >
      <span className="cat-icon">{icon}</span>
      <span className="cat-name">{foodName}</span>
    </Link>
  );
};


export default CategoryButton;