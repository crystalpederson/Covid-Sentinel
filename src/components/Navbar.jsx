import React from 'react';
import Map from './Map';
import Countries from './Countries';
import About from './About';

function NavBar () {
  return (
    <div className="container mx-auto">
      <Map />
      <Countries />
      <About />
    </div>
  );
}

export default NavBar;