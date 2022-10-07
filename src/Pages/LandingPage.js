// import fontAwesome from "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css";'
import { useNavigate } from "react-router-dom";
import "../Styling/LandingPage.css";

function LandingPage() {
  let navigate = useNavigate();
  const RedirectToMenuTemp = () => {
    navigate("/Menu");
  };
  return (
    <div>
      <div className="Card">
        <h2 className="Header"> Welcome to the Landing page!</h2>
        <button className="qr-button" onClick={RedirectToMenuTemp}>
          Scan QR code
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
