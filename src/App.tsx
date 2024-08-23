import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Aside from "./components/Aside";
import "./app.css";

const App: React.FC = () => {
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
