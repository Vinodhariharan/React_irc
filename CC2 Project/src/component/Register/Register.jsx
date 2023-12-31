import React, { useState } from 'react';
import '../../assets/css/Register.css';
import pic from '../../assets/images/Add a heading (1).png';
import { Link } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

function Register() {
  const [errorMessage, setErrorMessage] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [SnackBarError, setOpenErrorSnackbar] = useState(false);
  const [SnackBarSucess, setOpenSucessSnackbar] = useState(false);

  const handleChange = (event) => {
    console.log(formData)
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  var isValid;
  const handleSubmit = (event) => {
    event.preventDefault();

    isValid = validateForm();
    if (isValid) {
      // Handle registration logic (e.g., send data to server)
      console.log('Registration data:', formData);
      setOpenSucessSnackbar(true); // Show success Snackbar
      window.location.replace("/")
    } else {
      setOpenErrorSnackbar(true); // Show error Snackbar
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSucessSnackbar(false);
    setOpenErrorSnackbar(false);

  };

  const validateForm = () => {
    const errors = {};

    // Validate First Name
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    // Validate Last Name
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    // Validate Email
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!(/\S+@\S+\.\S+/.test(formData.email))) {
      errors.email = 'Invalid email address';
    }

    // Validate Password
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    // Validate Confirm Password
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormData({ ...formData, ...errors });
    console.log(errors);

    // Store error message globally
    setErrorMessage(Object.values(errors).join(' | '))

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="register-container">
      <Snackbar open={SnackBarError} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={'error'} sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Snackbar open={SnackBarSucess} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={'success'} sx={{ width: '100%' }}>
          Registration successful!
        </Alert>
      </Snackbar>
      <div className="container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h4 className="heading" style={{ paddingBottom: '10px' }}>The Plant Palette</h4>
          <h2 style={{ paddingBottom: '10px' }}>Register</h2>
          <label htmlFor="firstName">First Name</label>
          <input
            className="infocollection"
            type="text"
            id="firstName"
            placeholder={formData.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input className='infocollection'
            type="text"
            id="lastName"
            placeholder={formData.lastName}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input className='infocollection'
            type="email"
            id="email"
            placeholder={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input className='infocollection'
            type="password"
            id="password"
            placeholder={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input className='infocollection'
            type="password"
            id="confirmPassword"
            placeholder={formData.confirmPassword}
            onChange={handleChange}
          />
          {/* <Link sx={{ paddingBottom: '10px' }} to="/"> */}
          <button type="submit">Register</button>
          {/* </Link> */}
          <p style={{ margin: '10px', textAlign: 'center' }}>
            I'm already a member! <Link to="/login"><span style={{ color: 'blue' }}>Sign In</span></Link>
          </p>
        </form>
        <div className="picside">
          <img src={pic} style={{ margin: '0' }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;