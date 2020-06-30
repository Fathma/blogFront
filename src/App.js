import React, { Component, Fragment } from 'react';
import List from './components/child/list'
import Reg from './components/child/register'
import Login from './components/child/login'
import Profile from './components/child/profile'
import Post from './components/child/allposts'
import Postdetails from './components/child/postdetails'
import Createpost from './components/child/createpost'

import { MDBContainer } from 'mdbreact'
import Nav from "./components/child/Nav"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './App.css';

class App extends Component {

  render() {
    return (
      <MDBContainer >

        <Router >
          <div>

            <div className='container'>
              {/* <Navb /> */}
              <Switch>
                <Route path="/list" exact
                  render={props => {
                    return (
                      <Fragment>
                        <Nav />
                        <List />
                      </Fragment>
                    )
                  }}
                />
                <Route path="/register" exact component={Reg} />
                <Route path="/login" exact component={Login} />
                <Route path="/profile" exact render={props => {
                  return (
                    <Fragment>
                      <Nav />
                      <Profile />
                    </Fragment>
                  )
                }} />
                <Route path="/allpost" exact render={props => {
                  return (
                    <Fragment>
                      <Nav />
                      <Post />
                    </Fragment>
                  )
                }} />
                <Route path="/details/:id" render={props => {
                  return (
                    <Fragment>
                      <Nav />
                      <Postdetails />
                    </Fragment>
                  )
                }} />
                <Route path="/createpost" exact render={props => {
                  return (
                    <Fragment>
                      <Nav />
                      <Createpost />
                    </Fragment>
                  )
                }} />
              </Switch>
            </div>
          </div>
        </Router>

      </MDBContainer>


    );
  }

}

export default App;
