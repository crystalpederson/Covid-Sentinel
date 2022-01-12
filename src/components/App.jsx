import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

/*
Not sure what the purpose of this App component is. It simply renders a header and footer. No other components or logic are attached to this component.
Solution may be to move the react router into this component.
*/

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
