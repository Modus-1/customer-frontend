import React, { useContext } from "react";
import "../Styling/MenuItem.css";
import { CheckoutContext } from "../Components/OrderReviewContext";

function MenuItem(dish) {
  const addMenuItem = useContext(CheckoutContext).AddMenuItemToOrder;

  function AddMenuItemToOrder() {
    addMenuItem(dish.dish);
  }

  const { id, name, iconUrl, shortDescription, price } = dish.dish;
  return (
    <div className="menu-card" data-testid={`mItem-${id}`}>
      <div className="card-image">
        <img src={iconUrl} alt="A short presentation of a menu item dish." />
      </div>

      <div className="card-details-container">
        <div className="card-title">
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
    </div>
  );
}

export default MenuItem;
