import React, { useEffect, useState } from "react";
import Product from "../components/product";
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/Data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <div className="main-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
