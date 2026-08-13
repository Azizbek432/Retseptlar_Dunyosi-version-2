import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar/Navbar';
import RecipeCard from '../../components/recipes/RecipeCard';
import Recipes from '../../data/recipes';
import './AllRecipes.css';

const AllRecipes = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchParams] = useSearchParams();

  // URL dan parametrlarni olish
  const searchQuery = searchParams.get('search');
  const categoryQuery = searchParams.get('category');

  // Sevimlilarni localStorage'dan olish
  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    setFavorites(savedFavorites);
  }, []);

  // Retseptlarni filter qilish
  let filteredRecipes = Recipes;

  // Search
  if (searchQuery) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Category
  if (categoryQuery) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.category.toLowerCase() === categoryQuery.toLowerCase()
    );
  }

  // Like funksiyasi
  const toggleFavorite = (id) => {
    let newFavorites;

    if (favorites.includes(id)) {
      newFavorites = favorites.filter(favId => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }

    setFavorites(newFavorites);

    localStorage.setItem(
      'favorites',
      JSON.stringify(newFavorites)
    );
  };

  return (
    <div className="all-recipes-page">
      <Navbar onSearchClick={() => {}} />

      <main className="container">

        <div className="page-header">
          <h1>
            {searchQuery
              ? `"${searchQuery}" bo'yicha natijalar`
              : categoryQuery
              ? categoryQuery
              : 'Barcha Retseptlar'}
          </h1>

          <p>
            {filteredRecipes.length} ta retsept topildi
          </p>
        </div>

        <div className="recipe-grid">

          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}

          {filteredRecipes.length === 0 && (
            <div className="no-results">
              <p>😔 Afsuski, hech narsa topilmadi.</p>

              <p
                style={{
                  marginTop: '10px',
                  fontSize: '0.9rem'
                }}
              >
                Boshqa so'zlar bilan qidirib ko'ring yoki

                <a
                  href="/recipes"
                  style={{
                    color: '#f3a61d',
                    marginLeft: '5px'
                  }}
                >
                  barcha retseptlarni ko'ring
                </a>
              </p>
            </div>
          )}

        </div>

      </main>
    </div>
  );
};

export default AllRecipes;