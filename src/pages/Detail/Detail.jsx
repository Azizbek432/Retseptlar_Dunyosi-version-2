import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, ArrowLeft, ShoppingCart, UtensilsCrossed } from 'lucide-react';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer'; // Agar footer qo'shmoqchi bo'lsangiz
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3001/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <div className="loading-page">Yuklanmoqda...</div>;
  if (!recipe) return <div className="loading-page">Retsept topilmadi</div>;

  return (
    <div className="detail-page">
      <Navbar onSearchClick={() => {}} />
      
      <div className="container detail-wrapper">
        {/* Orqaga */}
        <Link to="/recipes" className="back-link">
          <ArrowLeft size={20} /> Orqaga qaytish
        </Link>

        {/* Sarlavha */}
        <div className="detail-header">
          <h1 className="detail-title">{recipe.title}</h1>
          <div className="meta-tags">
            <div className="meta-tag"><Clock size={18} /> {recipe.time} daqiqa</div>
            <div className="meta-tag"><Users size={18} /> {recipe.servings || '4 kishilik'}</div>
            <div className="meta-tag"><ChefHat size={18} /> {recipe.difficulty || 'Oson'}</div>
          </div>
        </div>

        {/* Asosiy Grid */}
        <div className="detail-grid">
          {/* Rasm (Chap tomon) */}
          <div className="recipe-image-wrapper">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          </div>

          {/* Masalliqlar (O'ng tomon) */}
          <div className="info-section">
            <h2><ShoppingCart size={24} /> Masalliqlar</h2>
            <ul className="ingredients-list">
              {recipe.ingredients && recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tayyorlash Bosqichlari */}
        <div className="steps-section">
          <h2><UtensilsCrossed size={28} /> Tayyorlash Bosqichlari</h2>
          <div className="steps-grid">
            {recipe.steps && recipe.steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{index + 1}</div>
                <p className="step-text">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Agar footer qo'shmoqchi bo'lsangiz oching: */}
      {/* <Footer /> */}
    </div>
  );
};

export default Detail;