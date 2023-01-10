import "../Styling/OrderItemCard.css";
import MenuItemInfoPopup from "./MenuItemInfoPopup";

function OrderItemCard(orderItem) {
  return (
    <div className="rv-order-item-card">
      <div className="rv-order-name">{orderItem.item.name}</div>
      <div className="controls">
        <button onClick={orderItem.subtract} className="rv-order-details-btn">
          &minus;
        </button>
        <div className="rv-order-details-amount">{orderItem.item.amount}</div>
        <button onClick={orderItem.add} className="rv-order-details-btn">
          &#43;
        </button>
      </div>
      <div className="rv-order-details">
        <strong>{orderItem.item.totalPriceString}</strong>
      </div>
    </div>
  );
}

export default OrderItemCard;
