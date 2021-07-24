import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";

import { login } from "../../store/actions/auth";

import "../../App.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = async (e) => {
    e.preventDefault();

    let data = {
      email: this.state.email,
      password: this.state.password,
    };

    let res = await this.props.login(data);
    this.props.history.push("/profile");
  };

  render() {
    return (
      <center>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='6'>
              <MDBCard style={{ align: "center" }}>
                <MDBCardBody className='mx-4'>
                  <form onSubmit={(e) => this.submit(e)}>
                    <p className='h5 text-center mb-4'>Sign in</p>
                    <div className='grey-text'>
                      <MDBInput
                        label='Type your email'
                        onChange={(e) => this.change(e)}
                        value={this.state.email}
                        name='email'
                        icon='envelope'
                        group
                        type='email'
                        validate
                        error='wrong'
                        success='right'
                      />
                      <MDBInput
                        label='Type your password'
                        onChange={(e) => this.change(e)}
                        value={this.state.password}
                        type='password'
                        name='password'
                        icon='lock'
                        group
                        type='password'
                        validate
                      />
                    </div>
                    <div className='text-center mt-4'>
                      <MDBBtn color='unique' type='submit'>
                        Login
                      </MDBBtn>
                    </div>
                  </form>
                  <a href='http://localhost:5000/user/google'>
                    Login using Google.
                  </a>{" "}
                  <br></br>
                  <a href='http://localhost:5000/user/facebook'>
                    Login using Facebook
                  </a>
                </MDBCardBody>
                <MDBModalFooter className='mx-5 pt-3 mb-1'>
                  <p className='font-small grey-text d-flex justify-content-end'>
                    Not a member?
                    <a
                      href='http://localhost:3000/register'
                      className='blue-text ml-1'
                    >
                      Sign Up
                    </a>
                  </p>
                </MDBModalFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </center>
    );
  }
}

export default connect(null, { login })(Login);
