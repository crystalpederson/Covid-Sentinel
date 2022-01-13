import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
