import { Link } from "react-router-dom";
import shopLogo from "../../assets/shop-logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    //
    <header className="navbar">
      <img src={shopLogo} alt="" id="shop-logo" />
      <h1 id="navbar-heading">Saunders' Superstore</h1>
      <div id="link-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  );
}
