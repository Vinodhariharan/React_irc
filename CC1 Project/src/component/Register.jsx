import '../assets/css/Register.css';
import pic from '../assets/images/Add a heading (1).png';
import { Link } from 'react-router-dom';

function Register(){

  return (
    <div className="register-container">
      <div className='container'>
      <form className="register-form">
        <h4 className='heading'>The Plant Palette</h4>
        <h2>Register</h2>
        <label htmlFor="firstName">First Name:</label>
        <input className='infocollection'
          type="text"
          id="firstName"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input className='infocollection'
          type="text"
          id="lastName"
        />
        <label htmlFor="email">Email:</label>
        <input className='infocollection'
          type="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input className='infocollection'
          type="password"
          id="password"
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input className='infocollection'
          type="password"
          id="confirmPassword"
        />

        <button type="button">
          Register
        </button>
        <p>I'm already a member! <Link to="/">Sign In</Link></p>
      </form>
      <div className='picside'>
        <img src={pic} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Register;
