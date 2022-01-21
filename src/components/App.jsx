import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';
import Login from './login';
import CovidMap from './CovidMap';

import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  
  //logged in variable
  const loggedIn = sessionStorage.getItem('loggedIn');
  const id = sessionStorage.getItem('id');
  if (!loggedIn){
  //if you are not logged in, return:
    //nav bar  
    //sign up component
    //log in component
    //footer
    return (
      <div>
        <NavBar />
        <Routes >
          <Route exact path = '/' element = {<Signup/>}> </Route>
          <Route path = '/login' element ={<Login/> }></Route>
        </Routes>
         
        <Footer />  
      
      </div>
    );
  } else {
  //if you're logged in, return:
  //return...
    return (
      <div>
        <NavBar/>
        <Routes >
          {/* temp route: */}
          <Route path="/" element={<CovidMap/>}></Route>
          <Route path="/home" element={<Dashboard />}></Route>
          <Route path="/worldmap" element={<CovidMap />}></Route>
          <Route path="/about" element={<About />}> </Route> 
        </Routes>
        <Footer/>
      </div>
    );
  }

};

export default App;



{/* <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<CovidMap />} />
          <Route path="home" element={<CovidMap />} />
          <Route path="country" element={<VaccineMap />} render={(props) => <VaccineMap {...props}/>}/>
          <Route path="about" element={<About />} />
        </Route> */}