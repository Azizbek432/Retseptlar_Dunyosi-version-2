import React, { useRef } from "react";
import Navbar from "../../components/layout/Navbar/Navbar.jsx"; 
import Hero from "../../components/layout/Hero/Hero.jsx";

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
      </main>
    </div>
  );
};

export default Home;