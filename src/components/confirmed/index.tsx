// Confirm.tsx
import React from "react";
import "./styles.css";
import "/public/assets/images/icon-order-confirmed.svg";

interface ConfirmProps {
  onClose: () => void;
  onConfirm: () => void;
  totalPrice: number;
  cartItems: any[];
}

//TODO: using index, Using assets for src of images,Use className inseted of using style={{ margin: "0px", marginTop: "5px" }}
const Confirm: React.FC<ConfirmProps> = ({
  onClose,
  totalPrice,
  onConfirm,
  cartItems,
}) => {
  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <div>
          <img
            style={{ height: "26px" }}
            src="/assets/images/icon-order-confirmed.svg"
            alt="تایید"
          />
          <h2 style={{ margin: "0px", marginTop: "5px" }}> Order Confirmed</h2>
          <p className="p-aside">We hope you enjoy your food!</p>
        </div>
        <ul>
          {cartItems.map((item) => (
            <li className="confirm-list" key={item.name}>
              <div>
                <h4 className="productName-aside">{item.name}</h4>
                <b className="b-aside quantity ">{item.quantity}× </b>
                <b className="b-aside">
                  ${item.price.toFixed(2)}
                  <span style={{ paddingLeft: "5px" }}>
                    {(item.price * item.quantity).toFixed(2)}
                  </span>
                </b>
              </div>
            </li>
          ))}
          <p className="order-total">
            Order Total <span>{totalPrice.toFixed(2)}</span>
          </p>
        </ul>
        <button
          className="confirmed-button"
          onClick={() => {
            alert("خرید تایید شد!");
            onClose();
            onConfirm();
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Confirm;
