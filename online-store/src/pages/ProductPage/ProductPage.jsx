import { ProductCard } from "../../components";

export default function ProductPage() {
  const products = [
    { name: "shirt", price: "10" },
    { name: "hat", price: "5" },
    { name: "shoes", price: "15" },
  ];

  return (
    <div className="page-container">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
