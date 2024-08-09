import React from 'react';
import Homepage from './Components/Homepage';
import RotatingPoop from './Components/RotatingPoop';
import FixedBottomNavigation from './Components/FixedBottomNavigation/FixedBottomNavigation';

import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RotatingPoop />
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
