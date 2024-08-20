import React from "react";
// import { useCart } from "../context/CartContext";
import "./product.css";
import AddToCart from "./AddToCart";

interface ProductProps {
  product: {
    image: Image;
    name: string;
    category: string;
    price: number;
  };
}
interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  // const { addToCart } = useCart();

  return (
    <div>
      <picture className="picture-container">
        <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
        <source media="(min-width: 768px)" srcSet={product.image.tablet} />
        <source media="(max-width: 767px)" srcSet={product.image.mobile} />

        <img
          className="product-img"
          src={product.image.thumbnail}
          alt={product.name}
        />
        {/* <button onClick={() => addToCart(product.name)}>
          اضافه به سبد خرید
        </button> */}
        <AddToCart productName={product.name} />
      </picture>
      <p className="category">{product.category}</p>
      <h3 className="name">{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
