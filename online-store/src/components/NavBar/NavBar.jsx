import { Link } from "react-router-dom";
import shopLogo from "../../assets/shop-logo.png";
import "./NavBar.css";

export default function NavBar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <header className="navbar">
      <img src={shopLogo} alt="" id="shop-logo" />
      <h1 id="navbar-heading">Saunders' Superstore</h1>
      <div id="link-container">
        <Link to={"/"}>Home</Link>
        {/* this link will only work if logged in */}
        <Link
          to={isLoggedIn == true ? "/products" : null}
          style={
            isLoggedIn == true
              ? null
              : { color: "#ffffffc6", textDecoration: "none" }
          }
        >
          Products
        </Link>
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  );
}
