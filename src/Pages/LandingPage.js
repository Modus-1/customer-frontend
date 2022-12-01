import "../Styling/LandingPage.css";
import LandingPageLoginButton from "../Components/LandingPageLoginButton";
import { useEffect } from "react";
import { TextField } from "@mui/material";

function LandingPage() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tableNumber = urlParams.get("tableNumber");
    console.log(tableNumber);

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
          <input className="session-code-input"></input>
        </div>
        <div className="session-code-button-container">
          <button className="session-code-button">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
