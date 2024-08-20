import React from "react";
import { useCart } from "../context/CartContext";
import "./aside.css";

const Aside: React.FC = () => {
  const { cartItems } = useCart();
  console.log(cartItems);

  return (
    <aside className="aside">
      <div className="container-cart">
        <h3 className="title-aside">Your Cart(0)</h3>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <div className="content-cart">
            <img src="/assets/images/notFood.svg" alt="" />
            <p>Your added items will appear here</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Aside;
