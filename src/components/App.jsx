import React, { useState } from 'react';
import Homepage from './Homepage';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import Loader from './Spinner';
// import env from "react-dotenv";

const App = () => {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const VACCOVID_API_HOST =
  //     'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com';
  //   const VACCINATION_API_HOST =
  //     'covid-19-world-vaccination-data.p.rapidapi.com';

  //   const options = {
  //     method: 'GET',
  //     url: process.env.VACCINATION_API_ENDPOINT,
  //     params: { iso: 'USA' },
  //     headers: {
  //       'x-rapidapi-host': VACCINATION_API_HOST,
  //       'x-rapidapi-key': process.env.VACCINATION_API_KEY,
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      {/* <div class="flex items-center justify-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
          role="status"
        >
          <span class="visually-hidden">We don't know what we're doing</span>
        </div>
      </div> */}
      {loading ? <Loader /> : ' '}

      <h1>Hello there</h1>
      <Homepage />
    </>
  );
};

export default App;
