import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Absencerequestform from './components/Absencerequestform';
import Teamview from './components/Teamview';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/absencerequest" component={Absencerequestform}/>
          <Route path="/teamview" component={Teamview}/>
          
        </div>
      </Router> 
    );
  }
}

export default App;
