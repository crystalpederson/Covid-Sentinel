import React from 'react';

import VaccineMap from './VaccineMap';
import CovidMap from './CovidMap';
// import env from "react-dotenv";

const App = () => {
  
  return (
    <>
      <CovidMap />
      <VaccineMap />
    </>
  );
};

export default App;
