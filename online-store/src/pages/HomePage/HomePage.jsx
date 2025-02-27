import { useState } from "react";
import HomePageProvider from "./context/HomePageProvider";
import { Welcome, Login } from "../../components";
import "./HomePage.css";

export default function HomePage() {
  /* since HomePage needs displayComponent in order to display the component,
     I've defiend that state here and passed the setDisplayComponent as a prop
     so that Login and Welcome can access it.*/
  const [displayComponent, setDisplayComponent] = useState(<Login />);
  return (
    // Created a provider component to keep HomePage clean
    <HomePageProvider setDisplayComponent={setDisplayComponent}>
      <div className="page-container" id="home-page">
        {displayComponent}
      </div>
    </HomePageProvider>
  );
}
