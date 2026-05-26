import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard';
import './FeaturedRecipes.css';

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        // JSON Server dan birinchi 6 ta retseptni olamiz
        const res = await fetch('http://localhost:3001/recipes?_limit=6');
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error('Retseptlarni yuklashda xatolik:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  if (loading) return <div className="loading-section">Yuklanmoqda...</div>;

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2>Ommabop Retseptlar</h2>
          <Link to="/recipes" className="view-all-btn">
            Barchasini ko'rish →
          </Link>
        </div>
        
        <div className="featured-grid">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;