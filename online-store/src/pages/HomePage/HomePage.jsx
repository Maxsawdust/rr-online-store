import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import "./HomePage.css";

export default function HomePage() {
  // using state to store the currentPage state - "login", or "welcome".
  const [currentPageState, setCurrentPageState] = useState("login");
  const [username, setUsername] = useState("");
  const inputRef = useRef(null);
  // using effect to focus the input when the page state changes
  useEffect(() => {
    // checking to see if inputRef is truthy, so this only runs when the input is displayed
    if (inputRef.current) inputRef.current.focus();
  }, [currentPageState]);

  // a map that contains the information for what to display based on the currentPageState.
  const PAGE_STATES = {
    login: {
      // content property stores the main content for the page - input, or h1.
      content: (
        <input
          type="text"
          id="log-in-input"
          placeholder="Please enter your username."
          ref={inputRef}
        />
      ),
      // buttonText stores the button's text.
      buttonText: "Log in",
      // nextPageState denotes what the state will change to on button click.
      nextPageState: "welcome",
    },
    welcome: {
      content: <h1 id="welcome-header">HELLO</h1>,
      buttonText: "Log out",
      nextPageState: "login",
    },
  };

  return (
    <div className="page-container home-page">
      {PAGE_STATES[currentPageState].content}
      <Button
        id="login-logout"
        onClick={() =>
          setCurrentPageState(PAGE_STATES[currentPageState].nextPageState)
        }>
        {PAGE_STATES[currentPageState].buttonText}
      </Button>
    </div>
  );
}
