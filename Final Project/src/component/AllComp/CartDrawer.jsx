import React, { useState, useEffect, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Badge } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { CartContext } from './useCart'; // Import the CartContext
import { CartCard } from './CartCard';

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const {cartItems, addToCart } = useContext(CartContext);
  const history = useHistory();
  var storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  useEffect(() => {
    // Fetch cartItems from local storage on mount
    storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Update the cartItems in the context
  }, [cartItems]);

  const handleCheckout = () => {
    // Redirect to the checkout page
    history.push('/checkout');
    // Close the cart drawer
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ borderRadius: '20px' }}
        variant="soft"
        color="neutral"
        endDecorator={
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon color='white' />
          </Badge>
        }
        onClick={() => setOpen(true)}
      >
        View Cart
      </Button>
      <Drawer
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        size={'md'}
        anchor='right'
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Your Cart</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            {cartItems.length === 0 ? (
              <Typography level="body-lg" textAlign="center">
                Your cart is empty.
              </Typography>
            ) : (
              <List>
                {storedCartItems.map((item) => (
                  <ListItem key={item.link}>
                    {/* Assuming CartCard handles the removal logic */}
                    <CartCard product={item}  />
                  </ListItem>
                ))}
              </List>
            )}
          </DialogContent>
          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button sx={{ borderRadius: '20px', backgroundColor: '#0A4938', color: "#fff" }}
              variant="soft" onClick={handleCheckout}>
              Checkout
            </Button>
            <Button sx={{ borderRadius: '20px', backgroundColor: 'red', color: "#fff" }}
              variant="soft"
              onClick={() => setOpen(false)}>Close</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </div>
  );
}
