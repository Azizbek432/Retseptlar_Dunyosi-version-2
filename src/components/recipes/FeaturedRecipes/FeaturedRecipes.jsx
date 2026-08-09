import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard';
import Recipes from '../../../data/recipes'
import './FeaturedRecipes.css';

const FeaturedRecipes = () => {



  return (
    <section className="featured-section">
  <div className="container">

    <div className="section-header">
      <h2>Ommabop Retseptlar</h2>

      <Link className="view-all-btn">
        Barchasini ko'rish →
      </Link>
    </div>

    <div className="recipesCardContainer">
      {Recipes.slice(0, 4).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>

  </div>
</section>
  );
};

export default FeaturedRecipes;