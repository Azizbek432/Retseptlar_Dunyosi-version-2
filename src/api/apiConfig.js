// Backend URL (JSON Server)
const API_URL = 'http://localhost:3001';

// 📦 Retseptlarni olish (hammasi)
export const getRecipes = async () => {
  const response = await fetch(`${API_URL}/recipes`);
  if (!response.ok) throw new Error('Ma\'lumotlarni olishda xatolik');
  return await response.json();
};

// 🔍 Bitta retseptni ID bo'yicha olish
export const getRecipeById = async (id) => {
  const response = await fetch(`${API_URL}/recipes/${id}`);
  if (!response.ok) throw new Error('Retsept topilmadi');
  return await response.json();
};

// 📂 Kategoriya bo'yicha filtrlash
export const getRecipesByCategory = async (category) => {
  const response = await fetch(`${API_URL}/recipes?category=${encodeURIComponent(category)}`);
  if (!response.ok) throw new Error('Kategoriya bo\'yicha olishda xatolik');
  return await response.json();
};

// 🔎 Qidiruv (title bo'yicha)
export const searchRecipes = async (query) => {
  const response = await fetch(`${API_URL}/recipes?title_like=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Qidiruvda xatolik');
  return await response.json();
};

// ➕ Yangi retsept qo'shish (Admin)
export const addRecipe = async (recipe) => {
  const response = await fetch(`${API_URL}/recipes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe)
  });
  if (!response.ok) throw new Error('Qo\'shishda xatolik');
  return await response.json();
};

// ✏️ Retseptni tahrirlash (Admin)
export const updateRecipe = async (id, recipe) => {
  const response = await fetch(`${API_URL}/recipes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe)
  });
  if (!response.ok) throw new Error('Tahrirlashda xatolik');
  return await response.json();
};

// 🗑️ Retseptni o'chirish (Admin)
export const deleteRecipe = async (id) => {
  const response = await fetch(`${API_URL}/recipes/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('O\'chirishda xatolik');
  return await response.json();
};

// ❤️ Sevimlilarga qo'shish/olish (LocalStorage orqali)
export const toggleFavorite = (id) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const index = favorites.indexOf(id);
  
  if (index === -1) {
    favorites.push(id);
  } else {
    favorites.splice(index, 1);
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return favorites;
};

// ❤️ Sevimlilarni olish
export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};