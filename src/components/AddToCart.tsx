import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./addToCart.css";

type Props = {
  productName: string;
  productPrice: number; // اضافه کردن قیمت
};

export default function AddToCart({ productName, productPrice }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { addToCart, removeFromCart, cartItems } = useCart();

  const itemInCart = cartItems.find((item) => item.name === productName);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleDecrement = () => {
    if (quantity > 0) {
      removeFromCart(productName);
    }
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
            onClick={handleDecrement}
          />
          <b>{quantity}</b>
          <img
            className="icon-hover"
            src="../../../public/assets/images/icon-plus.png"
            alt="increment"
            onClick={() =>
              addToCart({ name: productName, quantity: 1, price: productPrice })
            } // ارسال قیمت
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
