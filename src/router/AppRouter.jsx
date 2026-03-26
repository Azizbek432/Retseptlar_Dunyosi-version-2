import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx"; 
import AllRecipes from "../pages/AllRecipes/AllRecipes.jsx"; 
import Favorites from "../pages/Favorites/Favorites.jsx"; 

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-recipes" element={<AllRecipes />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;