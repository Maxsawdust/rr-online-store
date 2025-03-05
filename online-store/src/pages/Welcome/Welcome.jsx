import { useNavigate } from "react-router-dom";
import {
  UserContext,
  AuthContext,
  NameContext,
} from "../../Context/AppContext.jsx";
import "./Welcome.css";
import { useContext } from "react";

export default function Welcome({ name }) {
  // useNavigate to allow the buttons to navigate to products and about page.
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setCurrentUsername } = useContext(NameContext);

  const handleClick = () => {
    // set localStorage stuff
    localStorage.setItem("isLoggedIn", false);
    // setting "isLoggedIn" to false to update Navbar link
    setIsLoggedIn(false);

    // setting current username when logged out
    setCurrentUsername(null);
    localStorage.removeItem("currentUsername");
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
