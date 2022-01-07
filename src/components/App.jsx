import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './Navbar';
import Homepage from './Homepage';
import Countries from './Countries';
import About from './About';
import Map from './Map';

import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const VACCOVID_API_HOST =
      'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com';
    const VACCINATION_API_HOST =
      'covid-19-world-vaccination-data.p.rapidapi.com';

    const options = {
      method: 'GET',
      url: process.env.VACCINATION_API_ENDPOINT,
      params: { iso: 'USA' },
      headers: {
        'x-rapidapi-host': VACCINATION_API_HOST,
        'x-rapidapi-key': process.env.VACCINATION_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []); 

  return (
    <div>

      <NavBar />

    </div>
  );
};

export default App;
