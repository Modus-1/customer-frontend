import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import MenuPage from "./MenuPage";

function RouterPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element=<LandingPage />></Route>
        <Route path="/Home" element=<LandingPage />></Route>
        <Route path="/LandingPage" element=<LandingPage />></Route>
        <Route path="/Error" element=<ErrorPage />></Route>
        <Route path="/Menu" element={<MenuPage />}></Route>
        <Route path="*" element=<ErrorPage />></Route>
      </Routes>
    </div>
  );
}

export default RouterPage;