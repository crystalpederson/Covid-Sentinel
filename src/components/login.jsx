import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
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
  console.log(state)
const data = state;
// send data to the database

axios.post("/api/login", data)
  .then(res =>{
 console.log(res)
 console.log(res.data)
if (data) navigate('home')
  })
  .catch( err =>{
    if (err) alert("There was an error with your credentials. Please try again or click the link below to sign up!")
  });
};

// if login is authenticated then navigate to home 


  return (
    <div id = "outerBackground">

      <h1 >Covid Sentinel</h1>
   
      
      <div >
        <label>Email Address :</label>
        <input type="text" name="email" required onChange = {handleChange}/>
      </div>
      <div >
        <label>Password :</label>
        <input type="password" name="password" required onChange = {handleChange}/>
      </div>
      <div >
      <button type="submit" onClick ={handleSubmit}>Log In</button>
      </div>
      <div >
      <Link to="/">Click here if you do not have an account</Link>
     </div>
    </div>  
    
    
  );
};
export default Login;