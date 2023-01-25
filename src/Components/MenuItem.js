import React, { useContext, useState } from "react";
import "../Styling/MenuItem.css";
import { CheckoutContext } from "../Components/OrderReviewContext";
import MenuItemInfoPopup from "../Components/MenuItemInfoPopup";
import Popup from "reactjs-popup";
import checkMarkImg from "./checkmark.svg";

function MenuItem(dish) {
  const addMenuItem = useContext(CheckoutContext).AddMenuItemToOrder;
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const [isAddMenuItemPopupOpen, setIsAddMenuItemPopupOpen] = useState(false);
  const popupId = "add-popup";
  
  async function AddMenuItemToOrder() {
    addMenuItem(dish.dish);
    setIsAddMenuItemPopupOpen(true);
    await new Promise((r) => setTimeout(r, 10)); //animation when adding menu item to order
    document.getElementById(popupId).style.translate = "0px 0px";
    document.getElementById(popupId).style.filter = "opacity(100%)";
    await new Promise((r) => setTimeout(r, 1000));
    document.getElementById(popupId).style.filter = "opacity(0%)";
    await new Promise((r) => setTimeout(r, 500));
    document.getElementById(popupId).style.translate = "0px -200vh";
    setIsAddMenuItemPopupOpen(false);
  }



  const { id, name, iconUrl, shortDescription, price } = dish.dish;
  return (
    <div className="menu-card" data-testid={`mItem-${id}`}>
      <div className="card-image">
        <img onClick={()=>setIsMoreInfoOpen(true)} src={iconUrl} alt="A short presentation of a menu item dish." />
      </div>

      <div className="card-details-container">
        <div onClick={()=>setIsMoreInfoOpen(true)} className="card-title">
          <strong className="title">{name}</strong>
        </div>
        <div className="card-description">
          <div className="short-description">
            <span className="description">{shortDescription}</span>
          </div>
          <div className="price">
            {Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
            }).format(price)}
          </div>
        </div>
        <div className="card-controls">
          <button className="add-btn" onClick={AddMenuItemToOrder}>
            &#43;
          </button>
        </div>
      </div>
      <MenuItemInfoPopup dish={dish.dish} isOpen={isMoreInfoOpen} setOpen={setIsMoreInfoOpen}  addToOrder={AddMenuItemToOrder}/>
      <Popup open={isAddMenuItemPopupOpen} closeOnDocumentClick={false} modal>
        <div id={popupId} className="add-menu-item-popup-container">
          <div className="add-menu-item-popup">
            <div className="add-menu-item-popup-img">
              <img src={checkMarkImg} alt="order added image" />
              </div>
            <div className="add-menu-item-popup-text">
              <span>{dish.dish.name} added to order!</span>
            </div>
            </div>
        </div>
      </Popup>
    </div>
  );
}

export default MenuItem;
