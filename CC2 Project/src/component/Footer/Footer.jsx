// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="body2" sx={{fontFamily:'League Spartan, sans-serif'}}>
            <Link to="/terms">Terms and Conditions</Link> |{' '}
            <Link to="/privacy">Privacy Policy</Link> |{' '}
            <Link to="/faq">FAQ</Link> |{' '}
            <Link to="/contact">Contact Information</Link>
          </Typography>
        </Box>
        <Box>
          <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={{color:'#ffffff'}} />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon sx={{color:'#ffffff'}} />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{color:'#ffffff'}} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
