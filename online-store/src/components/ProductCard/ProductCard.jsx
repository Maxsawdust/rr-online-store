import Card from "react-bootstrap/Card";

export default function ProductCard({ product }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
      <button>buy</button>
    </Card>
  );
}
