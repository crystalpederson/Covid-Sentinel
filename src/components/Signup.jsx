import React from 'react';
import React, { useState } from 'react';

const Signup = () => {
    // console.log(test)
  return (
    <div>
    
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" required />
        <label>Last Name</label>
        <input type="text" name="lastName" required />
      </div>
      <div>
        <label>Email Address</label>
        <input type="text" name="email" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password1"/>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type="password" name="password2"/>
      </div>
      <button type="submit">Sign Up</button>
      
      
    </div>
  )
};
export default Signup;