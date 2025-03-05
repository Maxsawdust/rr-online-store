import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AppContext";
import shopLogo from "../../assets/shop-logo.png";
import "./NavBar.css";
import { useContext } from "react";

export default function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <header className="navbar">
      <img src={shopLogo} alt="" id="shop-logo" />
      <h1 id="navbar-heading">Saunders' Superstore</h1>
      <div id="link-container">
        <Link to={"/"}>Home</Link>
        {/* this link will only work if logged in */}
        {isLoggedIn ? (
          <Link to={"/products"}>Products</Link>
        ) : (
          <span style={{ color: "#ffffffc6" }}>Products</span>
        )}
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  );
}
