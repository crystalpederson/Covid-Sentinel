import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Signup />
      </div>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
};

export default App;
