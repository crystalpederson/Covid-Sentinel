import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Map from './Map'

function Homepage() {
  return (
    <div className="container mx-auto">
      <Map />
    </div>
  );
}

export default Homepage;
