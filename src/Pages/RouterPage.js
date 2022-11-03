import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import MenuPage from "./MenuPage";
import OrderReviewPage from "./OrderReviewPage";
export const CheckoutContext = React.createContext(null);

function RouterPage() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    //Gets the current order from the local storage
    const orderItemString = localStorage.getItem("order");
    if (orderItemString != null) {
      setSelectedItems(JSON.parse(orderItemString));
    }
  }, []);

  function AddMenuItemToOrder(dish) {
    let tempItems = selectedItems;
    tempItems.push(dish);
    setSelectedItems(tempItems);
    console.log(tempItems);
    localStorage.setItem("order", JSON.stringify(tempItems));
  }

  return (
    <div>
      <CheckoutContext.Provider value={{ selectedItems, AddMenuItemToOrder }}>
        <Routes>
          <Route path="/" element=<LandingPage />></Route>
          <Route path="/Home" element=<LandingPage />></Route>
          <Route path="/LandingPage" element=<LandingPage />></Route>
          <Route path="/Error" element=<ErrorPage />></Route>
          <Route path="/Menu" element={<MenuPage />}></Route>
          <Route path="/review" element=<OrderReviewPage />></Route>
          <Route path="*" element=<ErrorPage />></Route>
        </Routes>
      </CheckoutContext.Provider>
    </div>
  );
}

export default RouterPage;
