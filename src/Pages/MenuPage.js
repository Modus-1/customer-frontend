import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/MenuPage.css";
import CategoryTopBar from "../Components/CategoryTopBar";
import MenuItem from "../Components/MenuItem";
import { getAllMenuItems } from "../Components/Services";
import { CheckoutContext } from "../Components/OrderReviewContext";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);

  const totalOrders = useContext(CheckoutContext).GetTotalOrders();

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

  let navigate = useNavigate();

  async function GetMenuItems() {
    let menustuff = await getAllMenuItems();
    setMenuItems(menustuff);
  }

  function FilterHandeler(filter) {
    if (filter === '0'){
      setActiveFilter("");
      return;
    }
    if (activeFilter === filter) {
      setActiveFilter("");
      return;
    }
    setActiveFilter(filter);
  }

  // I know this is stupid but idk how to limit it in CSS, btw blame Calvin for this idea.
  function getTotalOrders(){
    if(totalOrders > 99){
      return '99..'
    }
    else return totalOrders
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
          <img alt="basket" src="./assets/basket.svg"></img>
          <div className="basket-amount">{getTotalOrders()}</div>
        </div>
        <div className="menupage-footer-button-container">
          <button onClick={() => {navigate("/Review")}}>Afrekenen</button>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
