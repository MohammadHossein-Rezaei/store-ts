import { CartProvider } from "./context/CartContext";
import "./app.css";
import Aside from "./components/aside";
import ProductList from "./components/ProductList";

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
