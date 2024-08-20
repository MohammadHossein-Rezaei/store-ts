import React, { createContext, useContext, useState } from "react";

interface CartContextType {
  cartItems: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  value: Record<string, number>; // کلید productId و مقدار به عنوان تعداد
  setValue: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [value, setValue] = useState<Record<string, number>>({}); // تغییر به Record

  const addToCart = (item: string) => {
    setCartItems((prevItems) => [...prevItems, item]);

    // تنظیم مقدار تعداد برای محصول خاص
    setValue((prevValue) => ({
      ...prevValue,
      [item]: (prevValue[item] || 0) + 1,
    }));
  };

  const removeFromCart = (item: string) => {
    setValue((prevValue) => {
      const currentQuantity = prevValue[item];
      if (currentQuantity > 0) {
        return {
          ...prevValue,
          [item]: currentQuantity - 1, // کاهش مقدار
        };
      } else {
        // وقتی مقدار 1 است، محصول را از cartItems حذف می‌کنیم
        setCartItems((prevItems) => prevItems.filter((i) => i !== item));
        const { [item]: removedItem, ...rest } = prevValue; // حذف محصول از value
        return rest;
      }
    });

    // حذف و یا کاهش مقدار
    setValue((prevValue) => {
      const newValue = { ...prevValue };
      if (newValue[item]) {
        delete newValue[item]; // حذف محصول اگر از کارت حذف شود
      }
      return newValue;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, value, setValue }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
