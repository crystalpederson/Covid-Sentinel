import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Map from './Map'

function Homepage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-blue-900 font-bold">Welcome to Covid Sentinel!</h1>
      <Map />
    </div>
  );
}

export default Homepage;
