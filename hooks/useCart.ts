
import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Course, CartItem, CartContextType } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((course: Course) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === course.id);
      if (existingItem) {
        // Courses are unique, so we don't increase quantity. Just ensure it's in the cart.
        return prevCart;
      }
      return [...prevCart, { ...course, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((courseId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== courseId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const getCartItemCount = useCallback(() => {
    return cart.length;
  }, [cart]);

  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
  }), [cart, addToCart, removeFromCart, clearCart, getCartTotal, getCartItemCount]);

  // FIX: Replaced JSX syntax with `React.createElement` to be compatible with the .ts file extension, which cannot parse JSX.
  return React.createElement(CartContext.Provider, { value }, children);
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
