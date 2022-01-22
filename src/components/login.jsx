import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Img from './../../img/covid.png';

const Login = () => {
// console.log("test")
  const navigate = useNavigate();

  // const [firstName, setFirstName] = useState('');
  const[state, setState] = useState({
    email: '',
    password: ''
  });


  const handleChange = event => {
  
    setState({...state, [event.target.name]: event.target.value });
  
  };


  const handleSubmit = event => {
  // navigate('about');
    console.log(state);
    const data = state;
    // send data to the database

    axios.post('/api/login', data)
      .then(res =>{
        console.log(res);
        window.location.href = '/home';
      })
      .catch( err =>{
        if (err) alert('There was an error with your credentials. Please try again or click the link below to sign up!');
      });
  };

  // if login is authenticated then navigate to home 

  return (
    <div className='login-page' id = "outerBackground">

      <h1 className = 'headline'>Covid Sentinel</h1>
     
      <div className = 'main-content'>
        <div className='picture'> 
          <img id= 'login-picture' src={Img} alt = "img"  />
        </div>

        <div className = 'login-form'>
          <div className = 'form-input'>
            <label>Email Address :</label>
            <input type="text" name="email" required onChange = {handleChange}/>
          </div>
          <div className = 'form-input' >
            <label>Password :</label>
            <input type="password" name="password" required onChange = {handleChange}/>
          </div>
          <div className = 'login-button'>
            <button type="submit" onClick ={handleSubmit}>Log In</button>
          </div>
          <div className = 'link-to-signIn'>
            <Link to="/">Click here if you do not have an account</Link>
          </div>
        </div> 
      </div> 
    </div>
    
  );
};
export default Login;