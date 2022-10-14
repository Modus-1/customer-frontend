import "../Styling/LandingPage.css";
import ScanQrButton from "../Components/ScanQrButton";

function LandingPage() {
  return (
    <div>
      <div className="Card">
        <h2 className="Header"> Welcome to the Landing page!</h2>
        <ScanQrButton />
      </div>
    </div>
  );
}

export default LandingPage;
