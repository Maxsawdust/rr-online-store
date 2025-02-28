import { useState } from "react";
import HomePageProvider from "../../contexts/HomePageProvider";
import { Welcome, Login } from "../../components";
import "./HomePage.css";

export default function HomePage() {
  /* since HomePage needs displayComponent in order to display the component,
     I've defined that state here and passed the setDisplayComponent as a prop
     so that Login and Welcome can access it.*/
  const [displayComponent, setDisplayComponent] = useState(<Login />);

  /* getting a boolean value based on localStorage, so that the logged in status 
     persists between render */
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    // Created a provider component to keep HomePage clean
    <HomePageProvider setDisplayComponent={setDisplayComponent}>
      <div className="page-container" id="home-page">
        {isLoggedIn ? <Welcome /> : <Login />}
      </div>
    </HomePageProvider>
  );
}
