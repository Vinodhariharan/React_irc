import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Input from '@mui/joy/Input'; // Import Input from MUI
import Stack from '@mui/joy/Stack';

const PaymentPage = ({ open, onClose, onPlaceOrder }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePlaceOrder = () => {
    // You can add your logic for processing the order and making the payment here
    // For simplicity, this example just closes the dialog
    onClose();
    onPlaceOrder();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      <DialogTitle>Payment Details</DialogTitle>
      <DialogContent>
        <Input
          fullWidth
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <Input
          fullWidth
          placeholder="Expiry Date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <Input
          fullWidth
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handlePlaceOrder} variant="soft" color="primary">
          Place Order
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentPage;
