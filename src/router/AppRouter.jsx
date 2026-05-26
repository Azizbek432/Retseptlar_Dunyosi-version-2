import { Routes, Route } from 'react-router-dom';

// Asosiy sahifalar importlari
import Home from '../pages/Home/Home';
import AllRecipes from '../pages/AllRecipes/AllRecipes';
import Detail from '../pages/Detail/Detail';
import Favorites from '../pages/Favorites/Favorites';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/NotFound/NotFound';

// ⚠️ Admin importlari vaqtincha koment qilingan:
// import AdminLogin from '../pages/Admin/Login';
// import AdminDashboard from '../pages/Admin/Dashboard';

function AppRouter() {
  return (
    <Routes>
      {/* Asosiy sahifalar */}
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<AllRecipes />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      
      {/* ⚠️ Admin route'lari vaqtincha koment qilingan: */}
      {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
      {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;