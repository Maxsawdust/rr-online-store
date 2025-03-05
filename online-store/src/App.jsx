import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductPage,
  AboutPage,
  Register,
  Login,
  Welcome,
} from "./pages";
import { Layout, Cart } from "./components";
import { createContext, useState } from "react";
import AppContext from "./Context/AppContext";
import "./App.css";

// creating a context to provide the buttons in ProductCard a state to display Cart
export const CartDisplayContext = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <AppContext>
      <CartDisplayContext.Provider value={{ cartProducts, setCartProducts }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={cartProducts[0] ? <Cart /> : null}>
              <Route path="/products" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Route>
        </Routes>
      </CartDisplayContext.Provider>
    </AppContext>
  );
}

export default App;
