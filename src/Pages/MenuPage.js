import { useEffect, useState, useRef } from "react";
import "../Styling/MenuPage.css";
import ResponsiveAppBar from "../Components/CategoryTopBar";
import MenuItem from "../Components/MenuItem";
import { getAllMenuItems } from "../Components/Services";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  const menuRef = useRef([]);

  useEffect(() => {
    GetMenuItems();
    menuRef.current = menuItems;
  }, [menuItems]);

  async function GetMenuItems() {
    let menustuff = await getAllMenuItems();
    setMenuItems(menustuff);
  }

  return (
    <div>
      <ResponsiveAppBar />
      {menuRef.current.map((item) => (
        <MenuItem key={item.id} dish={item} />
      ))}
    </div>
  );
}

export default MenuPage;
