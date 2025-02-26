import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, AboutPage } from "./pages";
import { Layout } from "./components";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
