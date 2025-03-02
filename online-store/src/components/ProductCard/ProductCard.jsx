import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardDropdown } from "..";
import { CartDisplayContext } from "../../App";
import "./ProductCard.css";
import { useContext, useState } from "react";

export default function ProductCard({ product }) {
  // state for detecting colour
  const [productColour, setProductColour] = useState(null);
  // state for displaying error
  const [isError, setIsError] = useState(false);
  // getting the cart state from context
  const { cartProducts, setCartProducts } = useContext(CartDisplayContext);

  // function to set the product name and price to state on click
  const handleClick = () => {
    // make sure the user has selected a colour
    if (!productColour) {
      setIsError(true);
      return;
    }

    // finding the index of the product in cartProducts.
    // this will be -1 if it's not there
    const productIndex = cartProducts.findIndex(
      // product must match both in name and in colour
      (item) => item.name === product.name && item.color === productColour
    );

    // if the product is not in the cart (index < 0), then add it to the cart.
    if (productIndex < 0) {
      setCartProducts([
        ...cartProducts,
        {
          price: product.price,
          name: product.name,
          quantity: 1,
          totalPrice: product.price,
          color: productColour,
        },
      ]);
      return;
    } else {
      // if the product is already in the cart, then just update the quantity and price.
      const updatedCart = [...cartProducts];
      // getting the product I want to update from the cart
      updatedCart[productIndex] = {
        // spreading the product
        ...updatedCart[productIndex],
        // updating quantity and totalPrice
        quantity: updatedCart[productIndex].quantity + 1,
        totalPrice: (updatedCart[productIndex].quantity + 1) * product.price,
      };
      // adding the newly updated cart to cartProducts
      setCartProducts(updatedCart);
    }
  };

  return (
    <Card id="product-card">
      <Card.Img variant="top" src={product.image} id="product-image" />
      <Card.Body id="product-body">
        <Card.Title id="product-name">{product.name}</Card.Title>
        <Card.Text id="product-description">{product.description}</Card.Text>
        <Card.Text id="product-price">£{product.price}</Card.Text>
        {isError ? <p id="colour-error">Please select a colour</p> : ""}
        <div id="card-footer">
          <Button
            variant="success"
            id="buy-button"
            onClick={() => handleClick()}>
            Buy
          </Button>
          <CardDropdown setProductColour={setProductColour} />
        </div>
      </Card.Body>
    </Card>
  );
}
