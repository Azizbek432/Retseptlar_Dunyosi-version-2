import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar/Navbar';
import RecipeCard from '../../components/recipes/RecipeCard';
import './AllRecipes.css';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [searchParams] = useSearchParams();
  
  // URL dan parametrlarni olish
  const searchQuery = searchParams.get('search');
  const categoryQuery = searchParams.get('category');

  // Sevimlilarni yuklash
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  // Retseptlarni yuklash (qidiruv yoki kategoriya bo'yicha)

useEffect(() => {
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      let url = 'http://localhost:3001/recipes';
      
      // Barcha retseptlarni olamiz
      const response = await fetch(url);
      let data = await response.json();
      
      // Keyin client-side da filtrlash qilamiz (case-insensitive)
      if (searchQuery) {
        data = data.filter(recipe => 
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else if (categoryQuery) {
        // ✅ Kategoriya nomlarini katta-kichik harfsiz solishtiramiz
        const normalizedCategory = categoryQuery.toLowerCase();
        data = data.filter(recipe => 
          recipe.category.toLowerCase() === normalizedCategory
        );
      }
      
      setRecipes(data);
    } catch (error) {
      console.error("Xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchRecipes();
}, [searchQuery, categoryQuery]);

  // Like funksiyasi
  const toggleFavorite = (id) => {
    let newFavorites;
    if (favorites.includes(id)) {
      newFavorites = favorites.filter(favId => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="all-recipes-page">
      <Navbar onSearchClick={() => {}} />
      
      <main className="container">
        <div className="page-header">
          <h1>
            {searchQuery ? `"${searchQuery}" bo'yicha natijalar` : 
             categoryQuery ? `${decodeURIComponent(categoryQuery)}` : 
             "Barcha Retseptlar"}
          </h1>
          <p>{recipes.length} ta retsept topildi</p>
        </div>

        {loading ? (
          <div className="loading">Yuklanmoqda...</div>
        ) : (
          <div className="recipe-grid">
            {recipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
            
            {recipes.length === 0 && (
              <div className="no-results">
                <p>😔 Afsuski, hech narsa topilmadi.</p>
                <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                  Boshqa so'zlar bilan qidirib ko'ring yoki 
                  <a href="/recipes" style={{ color: '#f3a61d', marginLeft: '5px' }}>
                    barcha retseptlarni ko'ring
                  </a>
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllRecipes;