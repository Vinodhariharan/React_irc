import React, { useContext } from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Divider from '@mui/joy/Divider';
import { CartContext } from './useCart';
import CartCard from './CartCard'; // Assuming you have a CartCard component

const CartList = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <List>
      {cartItems.map((item) => (
        <div key={item.id}>
          <ListItem>
            <CartCard product={item}></CartCard>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default CartList;
