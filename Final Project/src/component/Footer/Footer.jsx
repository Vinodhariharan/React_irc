// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid,IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Grid container alignItems="center">
      <Grid item sm={4}>
          <Typography variant="body2" sx={{fontFamily:'League Spartan, sans-serif'}}>&copy; {new Date().getFullYear()} The Plant Pallete. All rights reserved.</Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="body2" sx={{fontFamily:'League Spartan, sans-serif'}}>
            <Link to="/terms" style={{margin:'10px'}}>Terms and Conditions</Link> |{' '}
            <Link to="/privacy" style={{margin:'10px'}}>Privacy Policy</Link> |{' '}
            <Link to="/faq" style={{margin:'10px'}}>FAQ</Link> |{' '}
            <Link to="/contact" style={{margin:'10px'}}>Contact Information</Link>
          </Typography>
        </Grid>
        <Grid item sm={4} >
          <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={{color:'#ffffff'}} />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon sx={{color:'#ffffff'}} />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{color:'#ffffff'}} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
