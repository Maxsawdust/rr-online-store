import { createContext, useState } from "react";
import { Welcome, Login } from "../../components";
import "./HomePage.css";

export const StateContext = createContext(null);

export default function HomePage() {
  const [componentToDisplay, setComponentToDisplay] = useState(<Login />);
  return (
    //
    <StateContext.Provider
      value={{ componentToDisplay, setComponentToDisplay }}>
      <div className="page-container" id="home-page">
        {componentToDisplay}
      </div>
    </StateContext.Provider>
  );
}
