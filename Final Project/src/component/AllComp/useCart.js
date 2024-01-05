import React, { createContext, useState,  useEffect } from "react";
import axios from 'axios';

const CartContext = createContext();

function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.link === product.link);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.link === product.link ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.link !== product.link));
  };

  useEffect(() => {
    // Fetch cartItems from localhost:8000/cartItems using Axios
    axios.get('http://localhost:8000/cartItems')
      .then(response => {
        const fetchedCartItems = response.data;
        console.log('Fetched cartItems from server:', fetchedCartItems);
        setCartItems(fetchedCartItems);
      })
      .catch(error => {
        console.error('Error fetching cartItems:', error);
      });
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    console.log('Storing cartItems to local storage:', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return { cartItems, addToCart, removeFromCart, value: { cartItems, addToCart, removeFromCart } };
}

function CartProvider({ children }) {
  const { value } = useCart();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartProvider, CartContext };
