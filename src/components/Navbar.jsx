import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex flex-row mx-auto h-full bg-sky-500 py-50 px-50">
      <div className="basis-1/4 text-lg font-bold">
          COVID SENTINEL
      </div>
      <div className="basis-1/2">
        <ul className="flex flex-row">
          <li className="basis-1/3">
            <Link to="/">Home</Link>
          </li>
          <li className="basis-1/3">
            <Link to="/about">About</Link>
          </li>
          <li className="basis-1/3">
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </div>

      <hr />
      
      <Outlet />
    </div>
  );
  
}

export default NavBar;
