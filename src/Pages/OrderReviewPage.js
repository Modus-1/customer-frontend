import "../Styling/OrderReviewPage.css";
import ResponsiveAppBar from "../Components/CategoryTopBar";
import OrderItemCard from "../Components/OrderItemCard";
import { useState, useRef, useEffect } from "react";
import { createOrder } from "../Components/OrderServices";

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

  useEffect(() => {
    orderRef.current = new Order([
      new OrderItem(1, "Aardappel", 1, 0.69),
      new OrderItem(2, "Peer", 12, 0.42),
      new OrderItem(3, "Banaan", 69, 0.74),
      new OrderItem(4, "Ligma", 73, 0.73),
      new OrderItem(5, "Goblin", 12, 0.11),
    ]);
  }, [order]);

  const add = (id) => {
    orderRef.current.orderItems.map((item) => {
      if (item.id === id) {
        item.setAmount(item.amount + 1);
        console.log("add");
        console.log(orderRef.current);
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
      }

      return 0;
    });
  };

  /**
   * Processes the order.
   */
  async function processOrder() {
    // Disable payment button to indicate processing
    const orderButton = document.querySelector(".rv-order-pay-btn");
    orderButton.disabled = true;

    const orderItems = orderRef.current.orderItems;

    if (!orderItems) {
      orderButton.disabled = false;
      return;
    }

    // Put the order
    try {
      const order = await createOrder(orderItems);
      // Bring user to order wait page
      // Here they can track the status of their order or if something happened
      // The status page will fetch the order state again from ID so we can also ensure the order is still valid.
      // The Order ID is passed to the query so that historical orders can be viewed again later.

      // we do a little debug timer
      setTimeout(() => {
        window.location.href = `/status?orderId=${order.id}`;
      }, 2000);
    } catch (e) {
      alert(`Failed to place order: ${e}`);
    }
  }

  return (
    <div ref={setOrder}>
      <ResponsiveAppBar />
      <div className="rv-main-contents">
        <div className="rv-order-review-container">
          <h3>
            <strong>Bevestig order</strong>
          </h3>
          <div className="rv-all-orders-items-container">
            {orderRef.current.orderItems?.map((item) => (
              <OrderItemCard
                key={item.id}
                item={item}
                add={() => add(item.id)}
                subtract={() => subtract(item.id)}
              />
            ))}
          </div>
          <button className="rv-order-pay-btn" onClick={processOrder}>
            Betalen
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderReviewPage;