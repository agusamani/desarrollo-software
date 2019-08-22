import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Welcome from './components/Welcome';
import Home from './containers/Home';
import './App.css';


function App() {
  return (
     <div className="App">
       <Router>
         <Header/>
         <Route path="/" exact component={Welcome} />
         <Route path="/home" exact component={Home} />
         <Route path="/filter/:category" exact component={Home} />
       </Router>
    </div>
  );
}

export default App;
