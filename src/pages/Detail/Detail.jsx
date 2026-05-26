import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';
import Navbar from '../../components/layout/Navbar/Navbar';
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

  if (loading) return <div className="loading-detail">Yuklanmoqda...</div>;
  if (!recipe) return <div className="loading-detail">Retsept topilmadi</div>;

  return (
    <div className="detail-page">
      <Navbar onSearchClick={() => {}} />
      
      <main className="container detail-container">
        <Link to="/recipes" className="back-link">
          <ArrowLeft size={20} /> Orqaga qaytish
        </Link>

        <div className="detail-header">
          <h1>{recipe.title}</h1>
          <div className="meta-info">
            <span className="meta-item"><Clock size={16} /> {recipe.time} daqiqa</span>
            <span className="meta-item"><Users size={16} /> {recipe.servings || '4 kishilik'}</span>
            <span className="meta-item"><ChefHat size={16} /> {recipe.difficulty || 'Oson'}</span>
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-image">
            <img src={recipe.image} alt={recipe.title} />
          </div>
          
          <div className="detail-text">
            <section className="ingredients-section">
              <h2>🛒 Masalliqlar</h2>
              <ul>
                {recipe.ingredients && recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="steps-section">
              <h2>👨‍🍳 Tayyorlash Bosqichlari</h2>
              <div className="steps-list">
                {recipe.steps && recipe.steps.map((step, index) => (
                  <div key={index} className="step-item">
                    <span className="step-number">{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detail;