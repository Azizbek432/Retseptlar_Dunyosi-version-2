import recipesData from "./recipes.json";

export const getRecipes = async () => {
  try {
    return recipesData;
  } catch (error) {
    console.error("Ma'lumot olishda xato:", error);
    return [];
  }
};
