import React from "react";
import { Clock, Star } from "lucide-react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe_card">
      <div className="card_image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="rating_badge">
          <Star size={14} fill="#f3a61d" color="#f3a61d" />
          <span>{recipe.rating || "4.8"}</span>
        </div>
      </div>

      <div className="card_content">
        <h3>{recipe.title}</h3>
        <p>{recipe.desc?.substring(0, 50)}...</p>

        <div className="card_footer">
          <div className="time_info">
            <Clock size={16} color="#a5a5a5" />
            <span>{recipe.time} daqiqa</span>
          </div>
          <button className="batafsil_btn">Batafsil</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
