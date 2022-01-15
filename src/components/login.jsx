<<<<<<< HEAD

=======
>>>>>>> dev
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
// console.log("test")
const navigate = useNavigate();

  // const [firstName, setFirstName] = useState('');
  const[state, setState] = useState({
    email: '',
    password: ''
  });
<<<<<<< HEAD


const handleChange = event => {
=======
    
  const handleChange = event => {
>>>>>>> dev
  
    setState({...state, [event.target.name]: event.target.value });
  
  };


<<<<<<< HEAD
const handleSubmit = event => {
  // navigate('about');
  console.log(state)
const data = state;
// send data to the database

axios.post("/api/login", data)
  .then(res =>{
 console.log(res)
 console.log(res.data)
//  if (data) navigate('country')
  })
  .catch( err =>{
    if (err) console.log(err)
  });
};
=======
  const handleSubmit = event => {

    // send data to the database
    const data = state;

    axios.post('/api/login', data)
      .then(res =>{
        console.log(res.data);
      })
      .catch( err => {
        if (err) console.log(err);
      });
  };
>>>>>>> dev

// if login is authenticated then navigate to home 


  return (
    <div>
    
      <div>
        <label>Email Address</label>
        <input type="text" name="email" required onChange = {handleChange}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" required onChange = {handleChange}/>
      </div>
     
      <button type="submit" onClick ={handleSubmit}>Log In</button>
      <h1></h1>
     
      
    </div>
    
  );
};
export default Login;