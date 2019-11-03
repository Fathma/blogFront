import React from 'react';
import {Component} from 'react';
import List from './components/child/list'
import Reg from './components/child/register'
import Login from './components/child/login'
import Profile from './components/child/profile'
import Post from './components/child/allposts'





import { MDBContainer} from 'mdbreact'
import Navb from "./components/child/nav"

import{ BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';

class App extends Component {
  
  render(){
    return (
      <MDBContainer >
        
        <BrowserRouter >
        {/* <Navb /> */}
        <Switch>
          <Route path="/list" exact component={List} />
          <Route path="/register" exact component={Reg} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/allpost" exact component={Post} />
        </Switch>
      </BrowserRouter>

      </MDBContainer>
    
      
    );
  }
 
}

export default App;
