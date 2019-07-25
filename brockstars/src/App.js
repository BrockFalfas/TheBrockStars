import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";	
import Navbar from "./components/NavBar/Navbar";	
import Home from "./views/Home/Home";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>	
        <Navbar/>	
        <Route path="/" render={props => <Home/>}/>	
      </Router>

    </div>
  );
}

export default App;
