import { useContext } from "react";
import { StateContext } from "../../pages/HomePage/HomePage.jsx";
import { Welcome } from "../";
import "./Login.css";

export default function Login() {
  const { componentToDisplay, setComponentToDisplay } =
    useContext(StateContext);
  return (
    <div className="Login">
      <h1 id="log-in-header">Log in</h1>
      <div id="log-in-box">
        <input type="text" placeholder="Please enter your username" />
        <button
          className="btn btn-primary"
          id="log-in-button"
          onClick={() => setComponentToDisplay(<Welcome />)}>
          Log in
        </button>
      </div>
    </div>
  );
}
