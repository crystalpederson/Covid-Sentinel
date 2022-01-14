import React from 'react';
import react, { useState } from 'react';
import axios from 'axios';

const Login = () => {
// console.log("test")


// const [firstName, setFirstName] = useState('');
const[state, setState] = useState({
    email: '',
    password: ''
});
    
const handleChange = event => {
  
  setState({...state, [event.target.name]: event.target.value })
  
  }


const handleSubmit = event => {

// send data to the database
const data = state

axios.post('/api/login', data)
  .then(res =>{
 console.log(res.data);
  })
  .catch( err =>{
    if (err) console.log(err)
  });
};


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
    
  )
};
export default Login;