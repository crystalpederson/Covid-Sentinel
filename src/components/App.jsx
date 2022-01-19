import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';
import Login from './Login';
import CovidMap from './CovidMap';
import VaccineMap from './VaccineMap';
import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  
  //logged in variable
  const loggedIn = true;
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
<<<<<<< HEAD
    return (
      <div>
        <NavBar/>
        <Routes >
          <Route path="/" element={<CovidMap />}></Route> 
          <Route path="/country" element={<VaccineMap />} render={(props) => <VaccineMap {...props}/>} ></Route> 
          <Route path="/about" element={<About />}> </Route> 
        </Routes>
        <Footer/>
      </div>
    );
=======
  return (
    <div>
      <NavBar/>
    <Routes >
      <Route path="/home" element={<Dashboard />}></Route>
      <Route path="/country" element={<VaccineMap />} render={(props) => <VaccineMap {...props}/>} ></Route> 
      <Route path="/about" element={<About />}> </Route> 
    </Routes>
    <Footer/>
    </div>
  )
>>>>>>> dev
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