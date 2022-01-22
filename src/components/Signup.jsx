import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Img from './../../img/covid.png';
// import Styles from './stylesheets/styles.css';

const Signup = () => {
// console.log("test")
  const navigate = useNavigate();
  const[state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  });


  const handleChange = event => {

    setState({...state, [event.target.name]: event.target.value });

  };



  const handleSubmit = event => {
  // console.log("test", pass2)

    // this is going to send everything to the database
    // find out what post headers and things are needed in order to send to the database
    console.log(state);

    const data = {
      first_name: state.firstName,
      last_name: state.lastName,
      email: state.email,
      password: state.password
    };

    axios.post('/api/signup', data)
      .then(res =>{
        console.log(res);
        console.log(res.data);
        if (data) navigate('login');
      })
      .catch( err =>{
        if (err) alert('There was an error with your submission. Please try again!');
      });



  };
  return (
    <div  id = "sign-up-page">
     
      <h1 className='headline'>Covid Sentinel</h1>
      <div id='signup-content'>
     <img id='signup-img' src={Img} alt = "img"  />

      <div id='signup-form'>
        <div className='signup-input'>
          <label>First Name :</label>
          <input id='first-name' type="text" name='firstName' required onChange = {handleChange} />
        </div>

        <div className='signup-input'>
          <label>Last Name :</label>
          <input id='last-name' type="text" name="lastName" required onChange = {handleChange}/>
        </div>

        <div className='signup-input'>
          <label>Email Address :</label>
          <input id='email' type="text" name="email" required onChange = {handleChange}/>
        </div>

        <div className='signup-input'>
          <label>Password :</label>
          <input id='password' type="password" name="password" required onChange = {handleChange}/>
        </div>

        <div className='signup-input'>
          <label>Re-enter Password :</label>
          <input id='password2' type="password" name="password2" required onChange = {handleChange}/>
        </div>

        <div id='signup-button'>
        <button className='form-submit-button' type="submit" onClick ={handleSubmit}>Sign Up</button>
        </div>

        <div id='login-redirect-link'>
                  <Link to="/login">Click here if you already have an account</Link>
        </div>

      
      </div>
      </div>
    </div>
    
  );
};
export default Signup;