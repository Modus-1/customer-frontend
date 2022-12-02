import axios from "axios";

// Menu API
async function getAllMenuItems() {
  const response = await axios.get("https://localhost:7286/api/MenuItem");
  return response.data;
}

async function getMenuItemByID(id) {
  const response = await axios.get("https://localhost:7286/api/MenuItem/" + id);
  return response.data;
}

async function getAllCategories() {
  const response = await axios.get("https://localhost:7286/api/Category");
  return response.data;
}

export { getAllMenuItems, getMenuItemByID, getAllCategories };
