import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Welcome from './components/Welcome';
import Home from './containers/Home';
import FilterPeople from './containers/FilterPeople'
import './App.css';


function App() {
  return (
     <div className="App">
       <Header/>
       <Router>
         <Route path="/" exact component={Welcome} />
         <Route path="/home" exact component={Home} />
         <Route path="/people/:category" exact component={FilterPeople} />
       </Router>
    </div>
  );
}

export default App;
