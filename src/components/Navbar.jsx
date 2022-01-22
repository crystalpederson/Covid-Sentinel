import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavBar({loggedIn}) {

  if(loggedIn){
    return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-[#6E7DA2] p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-12">
            <span className="font-semibold text-xl tracking-tight">COVID SENTINEL</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto text-left">
            <div className="justify-between text-sm lg:flex-grow">
              <Link to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-5">
              Home
              </Link>
              <Link to="/worldmap" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-5 ml-5">
              World Map
              </Link>
              <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-5 ml-5">
              About
              </Link>
            </div>
            <button id='logout-button' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-5 ml-5">Log Out</button>
          </div>
          <hr />
        </nav>
      </>
    );
  }

  else{
    return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-[#6E7DA2] p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-12">
            <span className="font-semibold text-xl tracking-tight">COVID SENTINEL</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto text-right">
            <div className="justify-between text-sm lg:flex-grow">
              <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-5">
              Sign Up
              </Link>
              <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-5">
              Log In
              </Link>
            </div>
          </div>
          <hr />
        </nav>
      </>
    );
  }
}

export default NavBar;


