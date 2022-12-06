import "../Styling/LandingPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSession } from "../Components/services/GatewayServices";
import Cookies from 'js-cookie';

function LandingPage() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tableNumber = urlParams.get("tableNumber");
    const maxTableNumber = 10;
    const number = Number.parseInt(tableNumber);
    const sessionCookie = Cookies.get('session');

    console.log(sessionCookie);
    
    if (number == null || number <= 0 || number > maxTableNumber) {
      navigate("/Error");
    } else if (sessionCookie == null) {
      getSession(number);
      navigate("/Menu");
    }

    //1 check if session exists for tableNumber
    // make request to gateway to check for session related to tableNumber

    //2 if session does not exist, redirect to menu page and create session
    // get response from gateway whether the session exists
    // yes? -> 3
    // no? -> redirect to menu page and create session -> gateway session

    //3 if session exists, do not redirect to menu page and wait for user to login
    // enter passcode and verify in gateway
    // correct passcode? -> join session and redirect to menu page :)
  }, []);

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
