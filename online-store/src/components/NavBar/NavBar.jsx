import { Link } from "react-router-dom";
import shopLogo from "../../assets/shop-logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    //
    <div className="navbar">
      <img src={shopLogo} alt="" id="shop-logo" />
      <div id="link-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </div>
  );
}
