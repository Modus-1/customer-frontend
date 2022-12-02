import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import MenuPage from "./MenuPage";
import OrderReviewPage from "./OrderReviewPage";

import OrderReviewContext from "../Components/OrderReviewContext";
import "../Styling/General.css";

function RouterPage() {
  return (
    <div>
      <OrderReviewContext>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Home" element={<LandingPage />}></Route>
          <Route path="/LandingPage" element={<LandingPage />}></Route>
          <Route path="/Error" element={<ErrorPage />}></Route>
          <Route path="/Menu" element={<MenuPage />}></Route>
          <Route path="/review" element={<OrderReviewPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </OrderReviewContext>
    </div>
  );
}

export default RouterPage;
