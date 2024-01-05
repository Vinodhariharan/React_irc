import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import '../../assets/css/Login.css';
import pic from '../../assets/images/gardeningpic1.gif';
import { Link, useHistory } from 'react-router-dom';
import Input from '@mui/joy/Input';
import axios from 'axios';
import { useAuth } from '../AllComp/AuthContext';

function Login() {
  const { setLoggedIn, setUsername } = useAuth(); // Use the useAuth hook

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    // Your JSON server endpoint
    const apiUrl = 'http://localhost:8000/users';

    // Check if the user exists
    axios.get(apiUrl, { params: { email, password } })
      .then(response => {
        if (response.data.length > 0) {
          console.log(response.data[0].firstName)
          setUsername(response.data[0].firstName);
          // User exists, set login state to true and redirect to the home page
          setLoggedIn(true);
          history.push('/');
        } else {
          // User doesn't exist, show an error message
          setError('User does not exist or The Password is wrong. Please check your credentials.');
          setSnackbarOpen(true);
        }
      })
      .catch(error => {
        // Handle API error
        console.error('Error checking user:', error);
        setError('Error checking user. Please try again.');
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="login-container" style={{ backgroundColor: '#0A4938' }}>
      <div className='container'>
        <form className="login-form">
          <Link to='/' style={{color:'#0A4938'}}><h4 className='heading' style={{ paddingBottom: '10px' }}>The Plant Palette</h4></Link>
          <h2 style={{ paddingBottom: '10px' }}>Login</h2>
          {/* ... (your existing code) */}
          <label style={{ marginTop: '10px' }} htmlFor="username">Email</label>
          <Input sx={{ borderRadius: '20px' }}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={{ marginTop: '10px' }} htmlFor="password">Password</label>
          <Input sx={{ borderRadius: '20px' }}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Link sx={{ paddingBottom: '10px' }} to="/"><span style={{ color: 'blue' }}>Forgot Password?</span></Link>
          <br />
          <Button
            variant='contained'
            style={{ width: '100%', margin: '10px', marginLeft: '0px', borderRadius: '20px' }}
            type="button"
            onClick={handleLogin}
          >
            Login
          </Button>
          <p style={{ paddingBottom: '10px' }}>New customer? <Link to="/register"><span style={{ color: 'blue' }}>Create your account</span></Link></p>
        </form>
        <div>
          <img style={{ marginTop: '40px' }} src={pic} alt="" />
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
