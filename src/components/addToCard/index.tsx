import "./styles.css";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

type Props = {
  productName: string;
  productPrice: number;
};

export default function AddToCart({ productName, productPrice }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { addToCart, dicrementFromCart, cartItems } = useCart();

  const itemInCart = cartItems.find((item) => item.name === productName);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleDecrement = () => {
    if (quantity > 0) {
      dicrementFromCart(productName);
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
            src="/assets/images/icon-minus.png"
            alt="decrement"
            onClick={handleDecrement}
          />
          <b>{quantity}</b>
          <img
            className="icon-hover"
            src="/assets/images/icon-plus.png"
            alt="increment"
            onClick={() =>
              addToCart({ name: productName, quantity: 1, price: productPrice })
            }
          />
        </div>
      ) : (
        <div className="button-product">
          <img
            className="icon-add-to-cart"
            src="/assets/images/icon-add-to-cart.svg"
            alt="icon add"
          />
          <b>Add to Cart</b>
        </div>
      )}
    </button>
  );
}
