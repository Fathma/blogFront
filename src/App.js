import React from 'react';
import {Component} from 'react';
import List from './components/child/list'
import Reg from './components/child/register'
import Login from './components/child/login'
import Profile from './components/child/profile'


import{ BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

class App extends Component {
  
  render(){
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/list" exact component={List} />
          <Route path="/register" exact component={Reg} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
 
}

export default App;
