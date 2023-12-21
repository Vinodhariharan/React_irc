import { useState } from "react";

function useCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Product 1',
      price: 10.99,
      quantity: 2,
      link:"Product 1"
    },
    {
      id: 2,
      title: 'Product 2',
      price: 15.49,
      quantity: 1,
      link:"Product 2"
    },
    {
      id: 3,
      title: 'Product 3',
      price: 5.99,
      quantity: 3,
      link:"Product 3"
    },
  ]);

  const addToCart = (product) => {
    console.log("yes called");
    const existingItem = cartItems.find((item) => item.link === product.link);

    if (existingItem) {
      // If the item already exists, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.link === product.link ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  return { cartItems, addToCart };
}

export default useCart;