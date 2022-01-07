import React from 'react';
import { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import VaccineMap from './components/VaccineMap';
import CovidMap from './components/CovidMap';
import Styles from './stylesheets/styles.css';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
<<<<<<< HEAD
        <Route path="" element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
=======
        <Route path="" element={<CovidMap />} />
        <Route path="home" element={<CovidMap />} />
        <Route path="country" element={<VaccineMap />} />
>>>>>>> create-map-component
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
