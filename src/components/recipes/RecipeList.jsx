import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../../api/apiConfig";
import "./RecipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="recipes_section">
      <div className="section_header">
        <h2 className="section_title">MASHHUR RETSEPTLAR</h2>
        <button className="view_all_btn">Barchasini ko'rish →</button>
      </div>

      <div className="recipes_grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p style={{ color: "white" }}>Retseptlar yuklanmoqda...</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
