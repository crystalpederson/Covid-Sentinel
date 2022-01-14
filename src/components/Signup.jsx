import React from 'react';
import react, { useState } from 'react';

const Signup = () => {
// console.log("test")

const[state, setState] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password1: '',
  password2: ''
});


const handleChange = event => {

  setState({...state, [event.target.name]: event.target.value })

}



const handleSubmit = event => {
  // console.log("test", pass2)

  // this is going to send everything to the database
    // find out what post headers and things are needed in order to send to the database
console.log(state)



}
  return (
    <div>
     
    
      <div>
        <label>First Name</label>
        <input type="text" name='firstName' required onChange = {handleChange} />
        <h1></h1>
        <label>Last Name</label>
        <input type="text" name="lastName" required onChange = {handleChange}/>
      </div>
      <div>
        <label>Email Address</label>
        <input type="text" name="email" required onChange = {handleChange}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password1" required onChange = {handleChange}/>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type="password" name="password2" required onChange = {handleChange}/>
      </div>
      <button type="submit" onClick ={handleSubmit}>Sign Up</button>
      {/* <h1>{pass2}</h1> */}
      
    </div>
    
  )
};
export default Signup;