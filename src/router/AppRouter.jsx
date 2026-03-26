import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllRecipes from "../pages/AllRecipes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
