import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart } from 'lucide-react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }) => {
  return (
    <div className="recipe-card">
      <div className="card_image">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
        />
        <span className="category_badge">{recipe.category}</span>
        
        {/* LIKE TUGMASI - Yuqori o'ng burchakda */}
        {onToggleFavorite && (
          <button 
            className={`favorite_btn ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(recipe.id)}
            aria-label="Sevimlilarga qo'shish"
          >
            <Heart 
              size={20} 
              fill={isFavorite ? "#ff4757" : "none"} 
              color={isFavorite ? "#ff4757" : "white"} 
            />
          </button>
        )}
      </div>

      <div className="card_content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description.substring(0, 60)}...</p>

        <div className="card_footer">
          <span className="time">
            <Clock size={16} /> {recipe.time} daqiqa
          </span>
          
          <Link to={`/detail/${recipe.id}`} className="view-btn">Ko'rish</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;