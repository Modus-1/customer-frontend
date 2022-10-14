import "../Styling/OrderReviewPage.css"
import ResponsiveAppBar from "../Components/CategoryTopBar";
import OrderItemCard from "../Components/OrderItemCard"

class Order {
    constructor(orderItems) {
        this.orderItems = orderItems
    }
}

class OrderItem {
    constructor(id, name, amount, pricePer) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.pricePer = pricePer;
        this.totalPrice = Math.round(100* (amount * pricePer)) / 100;
        this.totalPriceString = (Intl.NumberFormat('nl-NL', {style: "currency", currency: "EUR"}).format(this.totalPrice));
    }
}

function OrderReviewPage() {
    
    const orderItems = [
        new OrderItem(1, "Aardappel", 1, 0.69),
        new OrderItem(2, "Peer", 12, 0.42),
        new OrderItem(3, "Banaan", 69, 0.74),
        new OrderItem(4, "Ligma", 73, 0.73),
        new OrderItem(5, "Goblin", 12, 0.11),
    ]

    const order = new Order(orderItems)

    const orderItemCards = []

    order.orderItems.forEach((orderItem, index) => {
        orderItemCards.push(
            <OrderItemCard key={orderItem.id} item={orderItem}/>
        )
    });

    return (
        <div>
            <ResponsiveAppBar />
            <div className="rv-main-contents">            
                <div className="rv-order-review-container">
                    <h3><strong>Bevestig order</strong></h3>
                    <div className="rv-all-orders-items-container">
                        {orderItemCards}
                    </div>
                    <button className="rv-order-pay-btn">Betalen</button>
                </div>
            </div>
        </div>
        
    )

}

export default OrderReviewPage