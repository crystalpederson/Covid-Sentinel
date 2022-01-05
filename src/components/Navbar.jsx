import React from 'react';
import Map from './Map';
import Countries from './Countries';
import About from './About';

function NavBar () {
  return (
    <nav className="container mx-auto">
      <Map />
      <Countries />
      <About />
    </nav>
  );
}

export default NavBar;