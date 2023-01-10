import "../Styling/OrderReviewPage.css";
import OrderItemCard from "../Components/OrderItemCard";
import { React, useState, useEffect, useContext } from "react";
import { CheckoutContext } from "../Components/OrderReviewContext";
import { getMenuItemByID } from "../Components/services/MenuServices";
import back_arrow_navigation from "../images/back-arrow-navigation.svg";
import Popup from "reactjs-popup";
import {
  MakeOrder,
  AddItemsToOrder,
} from "../Components/services/OrderServices";
import { useNavigate } from "react-router-dom";

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
    this.totalPriceString = this.getTotalPriceString();
  }

  getTotalPriceString() {
    return Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(this.totalPrice);
  }
}

function OrderReviewPage() {
  const navigate = useNavigate();
  const [order, setOrder] = useState({ orderItems: [] });
  const [note, setNote] = useState("");
  const [unacceptedNote, setUnacceptedNote] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const selectedItemIds = useContext(CheckoutContext).selectedItems;
  const AddMenuItemToOrder = useContext(CheckoutContext).AddMenuItemToOrder;
  const SubtractItemFromOrder =
    useContext(CheckoutContext).SubtractItemFromOrder;

  useEffect(() => {
    if (order.orderItems.length < 1 /* Should run only the first time */) {
      GetOrderItems();
    } else {
      UpdateCount();
    }
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

      const order = new Order(itemList);
      setOrder(order);
    }

    function UpdateCount() {
      let tempOrder = order;
      tempOrder.orderItems.map((item) => {
        let itemStillExists = false;
        for (let i = 0; i < selectedItemIds.length; i++) {
          if (item.id === selectedItemIds[i].id) {
            item.setAmount(selectedItemIds[i].count);
            itemStillExists = true;
          }
        }

        if (!itemStillExists) {
          const index = tempOrder.orderItems.indexOf(item);
          tempOrder.orderItems.splice(index, 1);
        }
        return null;
      });
      UpdatePrice();
      setOrder({ orderItems: tempOrder.orderItems });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItemIds]);

  useEffect(() => {
    UpdatePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order.orderItems]);

  function add(id) {
    order.orderItems.map((item) => {
      if (item.id === id) {
        AddMenuItemToOrder(item);
      }
      return null;
    });
  }

  function subtract(id) {
    order.orderItems.map((item) => {
      if (item.id === id) {
        SubtractItemFromOrder(item);
      }
      return null;
    });
  }

  async function SendOrderToApi() {
    const orderobj = await MakeOrder(note, 0);
    const orderid = orderobj.id;

    AddItemsToOrder(orderid, order.orderItems);
    //add items to order.
  }

  async function UpdatePrice() {
    let totalPrice = 0;
    order.orderItems.forEach((item) => {
      totalPrice += item.totalPrice;
    });
    setTotalPrice(totalPrice);
  }

  return (
    <div className="rv-main-content">
      <div className="rv-topbar">
        <img
          className="rv-back-arrow-navigation"
          src={back_arrow_navigation}
          onClick={() => navigate("/Menu")}
        ></img>
        <div className="rv-topbar-label">Review order</div>
      </div>
      <div className="rv-order-container">
        <div className="rv-order-items-container">
          {order.orderItems?.map((item, index) => (
            <OrderItemCard
              className="rv-orderitem"
              key={index}
              item={item}
              add={() => add(item.id)}
              subtract={() => subtract(item.id)}
            />
          ))}
        </div>
        <div className="rv-order-total-price-payment-container">
          <div className="rv-order-total-price-container">
            <div className="rv-order-total-price-label">Total (incl. VAT)</div>
            <div className="rv-order-tota-price-amount">
              {Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
              }).format(totalPrice)}
            </div>
          </div>
          <Popup
            trigger={
              <div className="rv-add-commment-btn">
                {note.length < 1 && <div>Opmerking toevoegen</div>}
                {note.length > 0 && <div>Opmerking zien/wijzigen</div>}
              </div>
            }
            modal
          >
            {(close) => (
              <div className="rv-add-commment-container">
                <textarea
                  value={unacceptedNote}
                  onChange={(event) => {
                    setUnacceptedNote(event.target.value);
                  }}
                  className="rv-order-commment-input"
                ></textarea>
                <div>
                  <button
                    onClick={() => {
                      setNote(unacceptedNote);
                      close();
                    }}
                  >
                    Bevestig
                  </button>
                  <button
                    onClick={() => {
                      close();
                    }}
                  >
                    Annuleer
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <button className="rv-order-payment-button" onClick={SendOrderToApi}>
            Finish order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderReviewPage;
