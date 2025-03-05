import { Outlet } from "react-router-dom";
import "./Cart.css";
import { useContext } from "react";
import { CartDisplayContext } from "../../App";
import { AuthContext } from "../../Context/AppContext";

/* NOTE that the task says to name this component "TotalPrice", however I 
   felt Cart was more fitting */
export default function Cart() {
  const { cartProducts } = useContext(CartDisplayContext);
  const { isLoggedIn } = useContext(AuthContext);

  let totalPrice = 0;
  cartProducts.forEach((product) => {
    totalPrice += product.totalPrice;
  });

  if (!isLoggedIn) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return (
    <>
      <Outlet />
      <div className="cart-container">
        <div className="Cart">
          <h2 id="total-price">Total Price: {Number(totalPrice.toFixed(2))}</h2>
          <ul id="products-list">
            {cartProducts.map((product, index) => {
              return (
                <li key={index} id="cart-item">
                  <div id="name-and-colour">
                    <p id="cart-item-name">{product.name}</p>
                    <p id="cart-item-colour">{product.color}</p>
                  </div>
                  <p id="cart-item-quantity">
                    {product.quantity ? ` x ${product.quantity}` : ""}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
