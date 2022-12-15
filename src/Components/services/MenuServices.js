import axios from "axios";

// Menu API
async function getAllMenuItems() {
  const response = await axios.get("/api/menu/api/MenuItem");
  return response.data;
}

async function getMenuItemByID(id) {
  const response = await axios.get("/api/menu/api/MenuItem/" + id);
  return response.data;
}

async function getAllCategories() {
  const response = await axios.get("/api/menu/api/Category");
  return response.data;
}

async function getIngredientByID(id) {
  const response = await axios.get("/api/menu/api/Ingredient/" + id);
  return response.data;
}

export { getAllMenuItems, getMenuItemByID, getAllCategories,getIngredientByID };
