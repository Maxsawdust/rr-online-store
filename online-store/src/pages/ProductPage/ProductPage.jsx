import { ProductCard } from "../../components";
// importing "products" array of Product objects from external file.
import { products } from "./products";
import "./ProductPage.css";

export default function ProductPage() {
  return (
    <div className="page-container">
      <div className="product-page">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
}
