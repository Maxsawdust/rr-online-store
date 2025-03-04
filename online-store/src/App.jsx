import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, AboutPage } from "./pages";
import { Layout, Cart } from "./components";
import "./App.css";
import { createContext, useEffect, useState } from "react";

// creating a context to provide the buttons in ProductCard a state to display Cart
export const CartDisplayContext = createContext();
// creating a context to detect if user is logged in
export const AuthContext = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // using effect to detect if the user is logged in through re-render
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn" === "true"));
  }, []);

  return (
    // using context to pass the state that determines whether to display the Cart
    <CartDisplayContext.Provider value={{ cartProducts, setCartProducts }}>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route element={cartProducts[0] ? <Cart /> : null}>
              <Route path="/products" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </CartDisplayContext.Provider>
  );
}

export default App;
