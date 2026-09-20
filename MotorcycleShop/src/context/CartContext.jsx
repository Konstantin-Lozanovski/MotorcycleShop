import { useCallback, useMemo, useState } from "react";
import { CartContext } from "./cartContext";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((bike) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === bike.id);
      if (existing) {
        return items.map((item) =>
          item.id === bike.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { ...bike, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, [removeFromCart]);

  const value = useMemo(
    () => ({
      cartItems,
      itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
      subtotal: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      addToCart,
      updateQuantity,
      removeFromCart,
    }),
    [addToCart, cartItems, removeFromCart, updateQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
