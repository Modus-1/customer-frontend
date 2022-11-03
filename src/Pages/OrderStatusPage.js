import "../Styling/OrderStatusPage.css";
import ResponsiveAppBar from "../Components/CategoryTopBar";
import { isValidOrder } from "../Components/OrderServices";

function OrderStatusPage() {
    console.log("Render Page")

    // Get order ID from session storage so we can resume
    // Also create a websocket connection so we can poll for potential events
    const orderId = sessionStorage["activeOrder"];

    isValidOrder(orderId).then((value) => {
        if(!value) {
            const statContainer = document.querySelector('.stat-container');
            statContainer.querySelector(".title").innerText = "Order not valid";
            statContainer.querySelector(".subtitle").innerText = "Please close this page.";
            sessionStorage.removeItem("activeOrder");
            return;
        }

        // Open WS connection
    });

    return (
        <div className="content">
            <ResponsiveAppBar />
            <div className="main">            
                <div className="stat-container">
                    <div className="title">
                        Your order is currently being processed!
                    </div>
                    <div className="subtitle">
                        Updates will show here.
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default OrderStatusPage