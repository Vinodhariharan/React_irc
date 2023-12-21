import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../assets/css/Navbar.css';
import CartDrawer from './CartDrawer';
const Navbar = () => {
  return (
    <AppBar position="fixed" className="navbar" sx={{backgroundColor:'#0A4938'}}>
      <Toolbar className="toolbar">
        <Typography variant="h6" component="div" fontFamily="Duru Sans, sans-serif;" sx={{color:'white'}}>
          <Link to="/"><b >The Plant Palette</b></Link>
        </Typography>
        <div className="spacer" />
        <div className="nav-links" sx={{fontFamily:'League Spartan, sans-serif'}}>
          <Button color="inherit" sx={{fontFamily:'League Spartan, sans-serif'}} component={Link} to="/" className="nav-link">
            Home
          </Button>
          <Button color="inherit" sx={{fontFamily:'League Spartan, sans-serif'}} component={Link} to="/about" className="nav-link">
            About
          </Button>
          <Button color="inherit" sx={{fontFamily:'League Spartan, sans-serif'}} component={Link} to="/login" className="nav-link login-button">
            Login
          </Button>
        </div>
        {/* <div className="cart-icon">
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color='white'/>
            </Badge>
          </IconButton>
        </div> */}
        <CartDrawer/>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
