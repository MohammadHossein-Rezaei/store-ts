import { useCart } from "../../context/CartContext";

type Props = {
  handleConfirmClick: () => void;
  totalPrice: number;
};

export default function Orders({ handleConfirmClick, totalPrice }: Props) {
  const { cartItems, removeFromCart } = useCart();
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <li className="buy-list" key={item.name}>
            <div>
              <h4 className="productName-aside">{item.name}</h4>
              <b className="quantity b-aside  ">{item.quantity}× </b>
              <b className="b-aside">
                <span>${item.price.toFixed(2)}</span>

                <span style={{ paddingLeft: "5px" }}>
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </b>
            </div>

            <img
              className="remove-icon"
              onClick={() => removeFromCart(item.name)}
              src="/images/icon-remove-item.svg"
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
  );
}
