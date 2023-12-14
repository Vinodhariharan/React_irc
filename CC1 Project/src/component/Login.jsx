import '../assets/css/Login.css';
import pic from '../assets/images/gardeningpic1.gif';
import { Link } from 'react-router-dom';

function Login(){
  return (
    <div className="login-container">
      <div className='container'>
      <form className="login-form">
        
        <h4 className='heading'>The Plant Palette</h4>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
        />
        <br />
        <a href="">Forgot Password?</a>
        <button type="button">
          Login
        </button>
        <p>New customer? <Link to="/Register">Create your account</Link></p>
      </form>
      <div>
        <img src={pic} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Login;
