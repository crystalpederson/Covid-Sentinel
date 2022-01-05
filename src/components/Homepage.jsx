import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './Navbar'

function Homepage() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <h1 className="text-blue-900 font-bold">Welcome to Covid Sentinel!</h1>
    </div>
  );
}

export default Homepage;
