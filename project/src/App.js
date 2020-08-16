import React from 'react';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
 import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Main_pages/NavBar'
import MainEntry from './Components/Main_pages/mainEntry';
import DashBoard from './Components/Main_pages/DashBoard';
import TheChallenge from './Components/Main_pages/TheChallengedefault'
import boxChallenge from './Components/Main_pages/boxChallenge'


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
      <Route path="/" exact={true} component={MainEntry}/>
  
      <Route path="/dashboard" component={DashBoard}/>

      <Route path="/Challenges/:id" component={boxChallenge}/>
      <Route path="/Challenges" component={TheChallenge}/>
      </Switch>
    </div>
    </Router>
  );
}

export default (App);
