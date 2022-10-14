import "../Styling/OrderItemCard.css"

function OrderItemCard(orderItem) {

    return(
        <div className="rv-order-item-card">
            <div className="rv-order-name">
                {orderItem.item.name}
            </div>
            <div className="rv-order-details">
                <strong>{orderItem.totalPriceString}</strong>
                <div className="controls">
                    <button className="rv-order-details-btn">&minus;</button>
                    <div className="rv-order-details-amount">{orderItem.item.amount}</div>
                    <button className="rv-order-details-btn">&#43;</button>
                </div>                
            </div>
        </div>
    )

}

export default OrderItemCard