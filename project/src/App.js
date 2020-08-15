import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
 import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Main_pages/NavBar'
import MainEntry from './Components/Main_pages/mainEntry';
import DashBoard from './Components/Main_pages/DashBoard';

import TheChallenge from './Components/Main_pages/TheChallenge'
function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <switch>
      <Route path="/" exact={true} component={MainEntry}/>
  
      <Route path="/dashboard" component={DashBoard}/>

      <Route path="/Challenge" component={TheChallenge}/>
      </switch>
      {
    console.log("hi")}
    </div>
    </Router>
  );
}

export default (App);
