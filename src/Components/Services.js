import axios from "axios";

async function getAllMenuItems() {
  const response = await axios.get("/api/menu/MenuItem");
  return response.data;
}

async function getMenuItemByID(id) {
  const response = await axios.get("/api/menu/MenuItem/" + id);
  return response.data;
}

async function getAllCategories() {
  const response = await axios.get("/api/menu/Category");
  return response.data;
}

export { getAllMenuItems, getMenuItemByID, getAllCategories };
