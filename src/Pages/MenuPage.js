import { useEffect, useState, useRef } from "react";
import "../Styling/MenuPage.css";
import CategoryTopBar from "../Components/CategoryTopBar";
import MenuItem from "../Components/MenuItem";
import { getAllMenuItems } from "../Components/Services";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  const menuRef = useRef([]);

  useEffect(() => {
    GetMenuItems();
  }, []);

  async function GetMenuItems() {
    let menustuff = await getAllMenuItems();
    setMenuItems(menustuff);
    menuRef.current = menustuff;
  }

  return (
    <div>
      <CategoryTopBar />
      <div className="main-contents">
        <div className="menu-items-container">
          {menuRef.current.map((item) => (
            <MenuItem key={item.id} dish={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
