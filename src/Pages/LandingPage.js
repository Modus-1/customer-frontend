import "../Styling/LandingPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sessionExists, getSession } from "../Components/services/GatewayServices";
import Cookies from 'js-cookie';

function LandingPage() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tableNumber = urlParams.get("tableNumber");
    const maxTableNumber = 10;
    const number = Number.parseInt(tableNumber);
    
    console.log(number);
    console.log(maxTableNumber);

    Cookies.remove('session');

    navigateToPage(number, maxTableNumber);
  }, []);

  async function navigateToPage(number, maxTableNumber) {

    let sessionExistsVar;

    if (number == null || isNaN(number) || number <= 0 || number > maxTableNumber) {
      navigate("/Error");
      return;
    } 

    sessionExists(number).then((response) => {
      console.log("No errors while getting the session bool.");
      console.log(response);
      sessionExistsVar = response;
    }).catch((error) => {
      console.log("There was an error while getting the session bool.");
      console.log(error);
      navigate("/Error");
    });

    getSession(number).then((response) => {
      console.log("No errors while getting the session.");
      console.log(response);
    }).catch((error) => {
      console.log("There was an error while getting the session.");
      console.log(error);
      navigate("/Error");
    })
    
    if (!sessionExistsVar) {
      navigate("/Menu");
    }
  }

  return (
    <div className="lp-main-contents">
      <div className="table-number">Table X</div>
      <div className="info">Ask the host for the session code.</div>
      <div className="session-code-container">
        <div className="session-code-input-container">
          <input
            className="session-code-input"
            maxLength={4}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value.replace(/\D/, ""))}
          />
        </div>
        <div className="session-code-button-container">
          <button
            className="session-code-button"
            onClick={() => navigate("/Menu")}
            disabled={!inputVal}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
