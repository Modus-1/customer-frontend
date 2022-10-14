import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/ScanQrButton.css";

function ScanQrButton() {
  let navigate = useNavigate();
  const RedirectToMenuTemp = () => {
    navigate("/Menu");
  };
  return (
    <button
      className="qr-button"
      onClick={RedirectToMenuTemp}
      data-testid="qrButton"
    >
      Scan QR code
    </button>
  );
}

export default ScanQrButton;
