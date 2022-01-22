import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import NavBar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';
import Login from './Login';
import CovidMap from './CovidMap';
import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  const [ID, setID] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    const id = Cookies.get('ssid');
    if(id){
      const numId = parseInt(id);
      setLoggedIn(true);
      setID(numId);
    }
  }, []);
  

  if (!loggedIn){
    return (
      <div>
        <NavBar loggedIn={loggedIn}/>
        <Routes >
          <Route exact path = '/' element = {<Signup/>}> </Route>
          <Route path = '/login' element ={<Login/> }></Route>
        </Routes>
         
        <Footer />  
      
      </div>
    );
  } else {
    return (
      <div>
        <NavBar loggedIn={loggedIn}/>
        <Routes >
          <Route path="/" element={<Dashboard ID={ID}/>}></Route>
          <Route path="/home" element={<Dashboard ID={ID}/>}></Route>
          <Route path="/worldmap" element={<CovidMap />}></Route>
          <Route path="/about" element={<About />}> </Route> 
        </Routes>
        <Footer/>
      </div>
    );
  }

};

export default App;