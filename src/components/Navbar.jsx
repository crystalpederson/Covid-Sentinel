import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <>
    {/* <nav classNameName="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-300 mb-3">
      <div classNameName="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div classNameName="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a
                classNameName="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                href="/"
                >
                COVID SENTINEL
              </a>
              <button
                classNameName="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i classNameName="fas fa-bars"></i>
              </button>
            </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </div>

      <hr />
      
      <Outlet />
    </nav> */}

    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight">COVID SENTINEL</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto text-center">
    <ul className="items-end text-sm lg:flex-grow">
      <li href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-4">
      <Link to="/">Home</Link>
      </li>
      <li href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-4">
      <Link to="/about">About</Link>
      </li>
      <li href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-4">
      <Link to="/countries">Countries</Link>
      </li>
    </ul>
  </div>

  <hr />

  <Outlet />
</nav>

    </>
  );
}

export default NavBar;


