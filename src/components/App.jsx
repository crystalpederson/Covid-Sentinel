import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './Navbar';
import Homepage from './Homepage';
import Countries from './Countries';
import About from './About';


const App = () => {
  return (
    <div className="App">
      <div className="main">
        {/* Define all the routes */}
        <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="countries" element={<Countries />} />
        </Route>
      </Routes>
      </div>
    </div>
  )
};

export default App;
