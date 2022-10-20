import "../Styling/LandingPage.css";
import LandingPageLoginButton from "../Components/LandingPageLoginButton";

function LandingPage() {
  return (

      <div className="lp-main-contents">
          <div className="lp-logo">
            <img src="./assets/logo-modus.png" alt="Logo" />
          </div>
          <h1 className="lp-welcome-header">Welcome!</h1>
          <div className="lp-input-container">
              <label>Passcode:</label>
              <input className="lp-passcode-input" disabled />
          </div>
          <LandingPageLoginButton />
      </div>

  );
}

export default LandingPage;
