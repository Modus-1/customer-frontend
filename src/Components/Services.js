import axios from "axios";

async function getAllMenuItems() {
  const response = await axios.get("https://localhost:7286/api/MenuItem");
  return await response.data;
}

async function getMenuItemByID(id) {
  const response = await axios.get("https://localhost:7286/api/MenuItem/" + id);
  return await response.data;
}

export { getAllMenuItems, getMenuItemByID };
