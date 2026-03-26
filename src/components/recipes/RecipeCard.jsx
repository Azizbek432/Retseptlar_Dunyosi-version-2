import React from "react";
import { Heart, Clock } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe_card">
      <div className="card_image">
        <img src={recipe.image} alt={recipe.title} />
        <span className="category_badge">{recipe.category}</span>
      </div>

      <div className="card_content">
        <h3>{recipe.title}</h3>
        <p>{recipe.desc.substring(0, 60)}...</p>

        <div className="card_footer">
          <span className="time">
            <Clock size={16} /> {recipe.time} daqiqa
          </span>

          <div className="card_buttons">
            <button className="favorite_btn">
              <Heart size={20} />
            </button>
            <button className="view_btn">Ko'rish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
