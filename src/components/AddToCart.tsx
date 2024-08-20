import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./addToCart.css";

type Props = {
  productName: string;
};

export default function AddToCart({ productName }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { addToCart, value, removeFromCart } = useCart();

  const handleDecrement = () => {
    removeFromCart(productName);
  };

  return (
    <button
      className="add-to-cart"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="button-product-hover">
          <img
            className="icon-hover"
            src="../../../public/assets/images/icon-minus.png"
            alt="decrement"
            onClick={handleDecrement} // استفاده از handleDecrement
          />
          <b>{value[productName] || 0}</b>{" "}
          {/* استفاده از value مربوط به محصول */}
          <img
            className="icon-hover"
            src="../../../public/assets/images/icon-plus.png"
            alt="increment"
            onClick={() => addToCart(productName)}
          />
        </div>
      ) : (
        <div className="button-product">
          <img
            className="icon-add-to-cart"
            src="../../../public/assets/images/icon-add-to-cart.svg"
            alt="icon add"
          />
          <b>Add to Cart</b>
        </div>
      )}
    </button>
  );
}
