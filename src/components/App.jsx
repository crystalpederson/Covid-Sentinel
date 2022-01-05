import React from 'react';

import VaccineMap from './VaccineMap';
import CovidMap from './CovidMap';
// import env from "react-dotenv";

const App = () => {
  
  return (
    <>
      <h1>Vaccine Map</h1>
      <VaccineMap />
      <h1>Covid Map</h1>
      <CovidMap />
    </>
  );
};

export default App;
