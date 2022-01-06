import React, { useState } from 'react';
import Homepage from './Homepage';
import Loader from './Spinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loader /> : ' '}

      <h1>Hello there</h1>
      <Homepage />
    </>
  );
};

export default App;
