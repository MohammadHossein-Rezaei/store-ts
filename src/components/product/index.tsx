import React from "react";
import "./styles.css";
import AddToCart from "../addToCard";

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

//TODO: using index
const Product: React.FC<ProductProps> = ({ product }) => {
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

        <AddToCart productName={product.name} productPrice={product.price} />
      </picture>
      <p className="category">{product.category}</p>
      <h3 className="name">{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
