import { useRef } from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
import Hero from '../../components/layout/Hero/Hero';
import Category from '../../components/layout/Category/Category';
import FeaturedRecipes from '../../components/recipes/FeaturedRecipes/FeaturedRecipes';
import Footer from '../../components/layout/Footer/Footer';
import './Home.css';

const Home = () => {
  const searchInputRef = useRef(null);

  const handleScrollToSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="home-page">
      <Navbar onSearchClick={handleScrollToSearch} />
      
      <main>
        <Hero searchRef={searchInputRef} />
        <Category />
        <FeaturedRecipes />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;