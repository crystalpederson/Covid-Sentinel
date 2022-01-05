import React from 'react';
import Homepage from './Homepage';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
// import env from "react-dotenv";

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
    <>
      <h1>Hello there</h1>
      <Homepage />
    </>
  );
};

export default App;
