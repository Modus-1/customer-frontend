import { useEffect, useState } from "react";
import "../Styling/MenuPage.css";
import CategoryTopBar from "../Components/CategoryTopBar";
import MenuItem from "../Components/MenuItem";
import { getAllMenuItems } from "../Components/Services";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);

  useEffect(() => {
    GetMenuItems();
  }, []);

  useEffect(() => {
    let filteredmenu = [];

    if (activeFilter === "") {
      filteredmenu = menuItems;
    } else
      filteredmenu = menuItems.filter((menuitem) => {
        return menuitem.categoryId === activeFilter;
      });

    setFilteredMenuItems(filteredmenu);
  }, [menuItems, activeFilter]);

  async function GetMenuItems() {
    let menustuff = await getAllMenuItems();
    setMenuItems(menustuff);
  }

  function FilterHandeler(filter) {
    if (activeFilter === filter) {
      setActiveFilter("");
      return;
    }
    setActiveFilter(filter);
  }

  return (
    <div>
      <CategoryTopBar filtermethod={FilterHandeler} />
      <div className="main-contents">
        <div className="menu-items-container">
          {filteredMenuItems.map((item) => (
            <MenuItem key={item.id} dish={item} />
          ))}
          <div className="space"></div>
        </div>
      </div>
      <div className="menupage-footer">
        <div className="basket-image-container">
          <img src="./assets/basket.svg"></img>
        </div>
        <div className="menupage-footer-button-container">
          <button>BETAAL!</button>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
