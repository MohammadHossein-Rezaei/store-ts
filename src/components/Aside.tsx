// Aside.tsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Confirm from "./Confirmed";
import "./aside.css";

const Aside: React.FC = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmClick = () => {
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  const handleConfirm = () => {
    clearCart(); // استفاده از تابع clearCart برای پاک کردن سبد خرید
  };

  return (
    <>
      <aside className="aside">
        <div className="container-cart">
          <h3 className="title-aside">Your Cart ({totalQuantity})</h3>

          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li className="buy-list" key={item.name}>
                    <div>
                      <h4 className="productName-aside">{item.name}</h4>
                      <b
                        className="p-aside"
                        style={{ color: "hsl(14, 86%, 42%)" }}
                      >
                        {item.quantity}×{" "}
                      </b>
                      <b className="p-aside" style={{ color: "#616161" }}>
                        ${item.price.toFixed(2)} * {item.quantity} =
                        {(item.price * item.quantity).toFixed(2)}
                      </b>
                    </div>

                    <img
                      className="remove-icon"
                      onClick={() => removeFromCart(item.name)}
                      src="../../public/assets/images/icon-remove-item.svg"
                      alt="remove"
                    />
                  </li>
                ))}
              </ul>
              <div className="confirm-order">
                <p className="order-total">
                  Order Total <b>${totalPrice.toFixed(2)}</b>
                </p>
                <button className="confirm-button" onClick={handleConfirmClick}>
                  Confirm Order
                </button>
              </div>
            </>
          ) : (
            <div className="content-cart">
              <img src="/assets/images/notFood.svg" alt="" />
              <p id="text-none">Your added items will appear here</p>
            </div>
          )}
        </div>
      </aside>

      {showConfirm && (
        <Confirm
          onClose={handleCloseConfirm}
          onConfirm={handleConfirm}
          totalPrice={totalPrice}
          cartItems={cartItems}
        />
      )}
    </>
  );
};

export default Aside;
