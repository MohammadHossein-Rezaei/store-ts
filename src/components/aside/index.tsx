import { useState } from "react";
import "./styles.css";
import { useCart } from "../../context/CartContext";
import Confirm from "../confirmed";
import Orders from "../orders";

const Aside = () => {
  const { cartItems, clearCart } = useCart();
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
    clearCart();
  };

  return (
    <>
      <aside className="aside">
        <div className="container-cart">
          <h3 className="title-aside">Your Cart ({totalQuantity})</h3>

          {cartItems.length > 0 ? (
            <Orders
              handleConfirmClick={handleConfirmClick}
              totalPrice={totalPrice}
            />
          ) : (
            <div className="content-cart">
              <img src="/store/public/images/notFood.svg" alt="notFood" />
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
