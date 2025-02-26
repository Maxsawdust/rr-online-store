import { Outlet } from "react-router-dom";
import { NavBar } from "../";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <NavBar />
      <Outlet />
    </div>
  );
}
