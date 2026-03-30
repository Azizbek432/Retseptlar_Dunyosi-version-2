import React, { useRef } from "react";
import Navbar from "../../components/layout/Navbar/Navbar.jsx"; 
import Hero from "../../components/layout/Hero/Hero.jsx";
import Category from "../../components/layout/Category/Category.jsx";

const Home = () => {
  const searchInputRef = useRef(null);

  const handleScrollToSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      searchInputRef.current.focus();
    }
  };

  return (
    <div>
      <Navbar onSearchClick={handleScrollToSearch} />
      
      <main>
        <Hero searchRef={searchInputRef} />
        <Category />
      </main>
    </div>
  );
};

export default Home;