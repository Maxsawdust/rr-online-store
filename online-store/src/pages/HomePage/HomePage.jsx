import { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../";
import { NameContext } from "../../Context/AppContext";

export default function HomePage() {
  const { currentUsername } = useContext(NameContext);
  const navigate = useNavigate();

  /* getting a boolean value based on localStorage, so that the logged in status 
     persists between render */
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="page-container" id="home-page">
      {isLoggedIn ? (
        <Welcome name={currentUsername} />
      ) : (
        <>
          {" "}
          <h1 className="home-heading">Hello!</h1>
          <h2 className="home-heading">
            Please register or log in to continue
          </h2>
          <div id="home-button-container">
            <Button
              className="home-page-button"
              onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button
              className="home-page-button"
              onClick={() => navigate("/login")}>
              Log in
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
