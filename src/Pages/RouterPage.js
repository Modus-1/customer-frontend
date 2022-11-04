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
    setSelectedItems(GetOrder());
  }, []);

  function GetOrder() {
    //Gets the current order from the local storage
    const orderItemString = localStorage.getItem("order");
    if (orderItemString != null) {
      const obj = JSON.parse(orderItemString);
      return obj;
    } else {
      return [];
    }
  }

  function SubtractItemFromOrder(dish) {
    let itemList = GetOrder();
    if (itemList != null) {
      itemList.map((item) => {
        if (item.id == dish.id) {
          item.count--;
          if (item.count < 1) {
            const index = itemList.indexOf(item);
            itemList.splice(index, 1);
          }
        }
      });
    } else {
      itemList = [];
    }
    setSelectedItems(itemList);
    localStorage.setItem("order", JSON.stringify(itemList));
  }

  function AddMenuItemToOrder(dish) {
    let itemList = GetOrder();
    let doesItemExist = false;
    if (itemList != null) {
      itemList.map((item) => {
        if (item.id == dish.id) {
          item.count++;
          doesItemExist = true;
        }
      });
    } else {
      itemList = [];
    }

    if (!doesItemExist) {
      itemList.push({ id: dish.id, count: 1 });
    }
    setSelectedItems(itemList);
    localStorage.setItem("order", JSON.stringify(itemList));
  }

  return (
    <div>
      <CheckoutContext.Provider
        value={{ selectedItems, AddMenuItemToOrder, SubtractItemFromOrder }}
      >
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
