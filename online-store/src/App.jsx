import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, AboutPage } from "./pages";
import { Layout, Cart } from "./components";
import "./App.css";
import { createContext, useState } from "react";

// creating a context to provide the buttons in ProductCard a state to display Cart
export const CartDisplayContext = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    // using context to pass the state to determine whether to display the Cart
    <CartDisplayContext value={{ cartProducts, setCartProducts }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={cartProducts[0] ? <Cart /> : null}>
            <Route path="/products" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Route>
      </Routes>
    </CartDisplayContext>
  );
}

export default App;
