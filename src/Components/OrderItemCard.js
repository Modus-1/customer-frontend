import "../Styling/OrderItemCard.css"


function OrderItemCard(orderItem) {
    console.log("Render OrderItem: " + orderItem.item.name)

    return(
        <div className="rv-order-item-card">
            <div className="rv-order-name">
                {orderItem.item.name}
            </div>
            <div className="rv-order-details">
                <strong>{orderItem.item.totalPriceString}</strong>
                <div className="controls">
                    <button onClick={orderItem.subtract} className="rv-order-details-btn">&minus;</button>
                    <div className="rv-order-details-amount">{orderItem.item.amount}</div>
                    <button onClick={orderItem.add} className="rv-order-details-btn">&#43;</button>
                </div>                
            </div>
        </div>
    )

}

export default OrderItemCard