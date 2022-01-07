import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';
import Homepage from './Homepage';
import Countries from './Countries';
import About from './About';
import Map from './Map';
import Loader from './Spinner';

import VaccineMap from './VaccineMap';
import CovidMap from './CovidMap';

const App = () => {
  return (
    <div>
      <div>
        <h1>Hello from App</h1>
        <NavBar />
        <CovidMap />
        <VaccineMap />
      </div>
    </div>
  );
};

export default App;
