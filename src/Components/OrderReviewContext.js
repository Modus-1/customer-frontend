import React, { useState, useEffect } from "react";

export const CheckoutContext = React.createContext(null);

export default function OrderReviewContext(props) {
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

  function GetTotalOrders(){
    //return the amount of selected orders
    let totalOrders = 0;

    for(let i = 0; i < selectedItems.length; i++){
      totalOrders += selectedItems[i].count;
    }
    return totalOrders;
  }

  function SubtractItemFromOrder(dish) {
    let itemList = GetOrder();
    if (itemList != null) {
      itemList.map((item) => {
        if (item.id === dish.id) {
          item.count--;
          if (item.count < 1) {
            const index = itemList.indexOf(item);
            itemList.splice(index, 1);
          }
        }

        return null;
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
        if (item.id === dish.id) {
          item.count++;
          doesItemExist = true;
        }
        return null;
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
    <CheckoutContext.Provider
      value={{
        selectedItems,
        AddMenuItemToOrder,
        SubtractItemFromOrder,
        GetTotalOrders,
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
}
