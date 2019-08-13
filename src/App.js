import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Home from './containers/Home';

import './App.css';

function App() {
  return (
     <div className="App">
       <Header />
       <Home />
    </div>
  );
}

export default App;
