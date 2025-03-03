import { useNavigate } from "react-router-dom";
import { UsernameContext } from "../../pages/HomePage/HomePage.jsx";
import "./Welcome.css";
import { useContext } from "react";
import { AuthContext } from "../../App.jsx";

export default function Welcome() {
  // useNavigate to allow the buttons to navigate to products and about page.
  const navigate = useNavigate();
  const { username, setUsername } = useContext(UsernameContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  // retrieving username from localStorage.
  /* this component is only rendered if a valid username is entered, so username 
     will always be present in storage. */
  const name = localStorage.getItem("username");

  const handleClick = () => {
    // set localStorage stuff
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("username", "");
    // setting username to "" on logOut
    setUsername({ ...username, name: "" });
    // setting "isLoggedIn" to false to update Navbar link
    setIsLoggedIn(false);
  };

  return (
    <div className="Welcome">
      <div className="welcome-text">
        <h1>Hello, {name}!</h1>
        <h2>Welcome to Saunders' superstore!</h2>
      </div>

      <div className="welcome-nav-buttons">
        <button
          className="welcome-page-button"
          onClick={() => navigate("/products")}>
          Products
        </button>
        <button
          className="welcome-page-button"
          onClick={() => navigate("/about")}>
          About
        </button>
      </div>
      <button
        className="welcome-page-button"
        id="log-out-button"
        onClick={handleClick}>
        Log out
      </button>
    </div>
  );
}
