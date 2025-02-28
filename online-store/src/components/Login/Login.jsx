import { useContext, useState } from "react";
import {
  StateContext,
  UsernameContext,
} from "../../pages/HomePage/context/HomePageProvider.jsx";
import { Welcome, ErrorMessage } from "../";
import validateName from "./validateName.js";
import "./Login.css";

export default function Login({ isError }) {
  const setDisplayComponent = useContext(StateContext);
  const { username, setUsername } = useContext(UsernameContext);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(username);
  console.log(errorMessage);

  // function called on submit of login form.
  const handleSubmit = (e) => {
    e.preventDefault();
    // validating the username entered. storing this in boolean
    const isValid = validateName(username.name).isValid;
    // setting the isValid property of username to the result of calling validateName.
    setUsername({ ...username, isValid });
    // displaying Welcome component if username is valid
    if (isValid) {
      // passing the username as a prop to Welcome, so that it can display the username.
      setDisplayComponent(<Welcome name={username.name} />);
    } else {
      // displaying error message if username is invalid
      setErrorMessage(validateName(username.name).message);
    }
  };

  return (
    <div className="Login">
      <h1 id="log-in-header">Log in</h1>
      <form id="log-in-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your username"
          onChange={(e) => setUsername({ ...username, name: e.target.value })}
        />
        {/* Display ErrorMessage if the username is invalid. */}
        {username.isValid ? null : <ErrorMessage message={errorMessage} />}
        <button className="btn btn-primary" id="log-in-button">
          Log in
        </button>
      </form>
    </div>
  );
}
