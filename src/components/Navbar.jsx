import React from 'react';

import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <nav>
      <div>
          COVID SENTINEL
      </div>
      <nav>
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
      </nav>

      <hr />

    </nav>
  );
}

export default NavBar;