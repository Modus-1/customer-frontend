import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/LandingPageLoginButton.css";

function LandingPageLoginButton() {
  let navigate = useNavigate();
  const RedirectToMenuTemp = () => {
    navigate("/Menu");
  };
  return (
    <button
      className="lp-login-btn"
      onClick={RedirectToMenuTemp}
      data-testid="lpLoginButton"
    >
      Login
    </button>
  );
}

export default LandingPageLoginButton;
