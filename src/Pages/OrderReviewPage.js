import "../Styling/OrderReviewPage.css";
import ResponsiveAppBar from "../Components/CategoryTopBar";
import OrderItemCard from "../Components/OrderItemCard";
import { useState, useRef, useEffect } from "react";
import { CheckoutContext } from "./RouterPage";
import { useContext } from "react";
import { getMenuItemByID } from "../Components/Services";
class Order {
  constructor(orderItems) {
    this.orderItems = orderItems;
  }
}

class OrderItem {
  constructor(id, name, amount, pricePer) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.pricePer = pricePer;
    this.totalPrice = Math.round(100 * (amount * pricePer)) / 100;
    this.totalPriceString = this.getTotalPriceString();
  }

  setAmount(amount) {
    this.amount = amount;
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.totalPrice = Math.round(100 * (this.amount * this.pricePer)) / 100;
  }

  getTotalPriceString() {
    return Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(this.totalPrice);
  }
}

function OrderReviewPage() {
  console.log("Render Page");

  /*
        De hoofddata moet aangepast worden door op de + en - te klikken 
        in de OrderItemCard componenten.
        Dit moet zichtbaar zijn in de UI wanneer er op die knoppen
        gedrukt wordt. Dit werkt momenteel niet. 
    */

  const orderRef = useRef([]);
  const [order, setOrder] = useState({ orderItems: [] });
  const selectedItemIds = useContext(CheckoutContext).selectedItems;
  const AddMenuItemToOrder = useContext(CheckoutContext).AddMenuItemToOrder;
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    GetOrderItems();
  }, [selectedItemIds]);

  async function GetOrderItems() {
    let itemList = [];
    for (let i = 0; i < selectedItemIds.length; i++) {
      const item = await getMenuItemByID(selectedItemIds[i].id);
      const orderItem = new OrderItem(
        item.id,
        item.name,
        selectedItemIds[i].count,
        item.price
      );
      itemList.push(orderItem);
    }

    console.log(itemList);
    const order = new Order(itemList);
    updateOrderList(order);
  }

  function updateOrderList(order) {
    orderRef.current = order;
    setOrder({ orderItems: { order } });
  }

  const add = (id) => {
    orderRef.current.orderItems.map((item) => {
      if (item.id === id) {
        AddMenuItemToOrder(item);
        updateOrderList(orderRef.current);
      }
      return 0;
    });
  };

  const subtract = (id) => {
    orderRef.current.orderItems.map((item) => {
      if (item.id === id) {
        item.setAmount(item.amount - 1);
        console.log("subtract");
        console.log(orderRef.current);
        updateOrderList(orderRef.current);
      }

      return 0;
    });
  };

  return (
    <div ref={setOrder}>
      <ResponsiveAppBar />
      <div className="rv-main-contents">
        <div className="rv-order-review-container">
          <h3>
            <strong>Bevestig order</strong>
          </h3>
          <div className="rv-all-orders-items-container">
            {orderRef.current.orderItems?.map((item, index) => (
              <OrderItemCard
                key={index}
                item={item}
                add={() => add(item.id)}
                subtract={() => subtract(item.id)}
              />
            ))}
          </div>
          <button className="rv-order-pay-btn">Betalen</button>
        </div>
      </div>
    </div>
  );
}

export default OrderReviewPage;
