import React from 'react';
import { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardBody } from 'mdbreact'


import '../../App.css';

class Reg extends Component {

  render() {
    return (
      // <div className="App">
      //  <form action="/user/register" method="POST">
      //      <input name="name" placeholder="name"/>
      //      <input name="email" placeholder="email"/>
      //      <input name="role" placeholder="role"/>
      //      <input name="password" placeholder="password"/>
      //      <input name="password2" placeholder="password2"/>
      //      <button type="submit">Submit</button>
      //  </form>
      //  <a href="http://localhost:5000/user/google" >Google Signin.</a> <br></br>
      //  <a href="http://localhost:5000/user/facebook" >Facebook Signin.</a>
      // </div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard style={{ align: "center" }}>
              <MDBCardBody className="mx-4">
                <form action="/user/register" method="POST" enctype='multipart/form-data'>
                  
                  <p className="h4 text-center mb-4">Sign up</p>
                  <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                  <br />
                  <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterConfirmEx"
                    className="grey-text"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    id="role"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                  >
                    Re-type password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    className="form-control"
                  />
                  <br />
                  <input type="file" name="imageURL"></input>
                  <br />
                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="submit">Register</MDBBtn>
                  </div>
                </form>
                <a href="http://localhost:5000/user/google" >Google Signin.</a> <br></br>
                <a href="http://localhost:5000/user/facebook" >Facebook Signin.</a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }

}

export default Reg;
