import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";

import "./app.css";
import Aside from "./components/aside";

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <main className="main">
          <h1 className="main-title">Dessert</h1>
          <ProductList />
        </main>
        <Aside />
      </div>
    </CartProvider>
  );
};

export default App;
