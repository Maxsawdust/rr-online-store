import { createContext, useState } from "react";
import HomePageProvider from "../../contexts/HomePageProvider";
import { Welcome, Login } from "../../components";
import "./HomePage.css";

export const UsernameContext = createContext(null);

export default function HomePage() {
  // creating username state so that Login can easily pass it to Welcome
  /* username is an object consisting of name - acquired from user input in 
       Login component, and isValid - determined in line 30 and 31 of Login through
       the validateName function. */
  const [username, setUsername] = useState({
    name: "",
    isValid: true,
  });

  /* getting a boolean value based on localStorage, so that the logged in status 
     persists between render */
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    // Created a provider component to keep HomePage clean
    <UsernameContext.Provider value={{ username, setUsername }}>
      <div className="page-container" id="home-page">
        {isLoggedIn ? <Welcome /> : <Login />}
      </div>
    </UsernameContext.Provider>
  );
}
