import { Alert } from '@mui/material';
import '../../assets/css/Login.css';
import pic from '../../assets/images/gardeningpic1.gif';
import { Link } from 'react-router-dom';

function Login(){

  return (
    <div className="login-container" style={{backgroundColor:'#0A4938'}}> 
      <div className='container'>
      <form className="login-form">
        
        <h4 className='heading' style={{paddingBottom:'10px'}}>The Plant Palette</h4>
        <h2 style={{paddingBottom:'10px'}}>Login</h2>
        <label  htmlFor="username">Email</label>
        <input
          type="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
        />
        <br />
        <Link sx={{paddingBottom:'10px' }} to="/"><span style={{color:'blue'}}>Forgot Password?</span></Link>
        <Link sx={{paddingBottom:'10px'}} to="/">
        <button style={{marginBottom:'10px'}} type="button" >
          Login
        </button>
        </Link>
        <p style={{paddingBottom:'10px'}}>New customer? <Link to="/register"><span style={{color:'blue'}}>Create your account</span></Link></p>
      </form>
      <div>
        <img src={pic} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Login;
