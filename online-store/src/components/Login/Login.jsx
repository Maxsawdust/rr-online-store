import { useContext } from "react";
import {
  StateContext,
  UsernameContext,
} from "../../pages/HomePage/context/HomePageProvider.jsx";
import { Welcome, ErrorMessage } from "../";
import "./Login.css";

export default function Login({ isError }) {
  const setDisplayComponent = useContext(StateContext);
  const { setUsername } = useContext(UsernameContext);

  return (
    <div className="Login">
      <h1 id="log-in-header">Log in</h1>
      <div id="log-in-box">
        <input
          type="text"
          placeholder="Please enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* Display ErrorMessage if the username is invalid. */}
        {isError ? <ErrorMessage /> : null}
        <button
          className="btn btn-primary"
          id="log-in-button"
          onClick={() => {
            // VALIDATE USERNAME HERE
            setDisplayComponent(<Welcome />);
          }}>
          Log in
        </button>
      </div>
    </div>
  );
}
