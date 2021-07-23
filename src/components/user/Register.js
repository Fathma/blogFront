import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBCardBody,
} from "mdbreact";

import { userRegister } from "../../store/actions/user";

import "../../App.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      role: "",
      password: "",
    };
  }

  submit = async (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
    };
    await this.props.userRegister(data);

    // localStorage.setItem('jwt', res.data)
    // window.location.replace("/login");
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <MDBCard style={{ align: "center" }}>
              <MDBCardBody className='mx-4'>
                <form
                  onSubmit={(e) => this.submit(e)}
                  method='POST'
                  enctype='multipart/form-data'
                >
                  <p className='h4 text-center mb-4'>Sign up</p>
                  <label
                    htmlFor='defaultFormRegisterNameEx'
                    className='grey-text'
                  >
                    Your name
                  </label>
                  <input
                    type='text'
                    onChange={(e) => this.change(e)}
                    name='name'
                    id='name'
                    className='form-control'
                  />
                  <br />
                  <label
                    htmlFor='defaultFormRegisterEmailEx'
                    className='grey-text'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={(e) => this.change(e)}
                    className='form-control'
                  />
                  <br />
                  <label
                    htmlFor='defaultFormRegisterConfirmEx'
                    className='grey-text'
                  >
                    Role
                  </label>
                  <input
                    type='text'
                    name='role'
                    onChange={(e) => this.change(e)}
                    id='role'
                    className='form-control'
                  />
                  <br />
                  <label
                    htmlFor='defaultFormRegisterPasswordEx'
                    className='grey-text'
                  >
                    Your password
                  </label>
                  <input
                    type='password'
                    onChange={(e) => this.change(e)}
                    name='password'
                    id='password'
                    className='form-control'
                  />
                  <br />
                  <label
                    htmlFor='defaultFormRegisterPasswordEx'
                    className='grey-text'
                  >
                    Re-type password
                  </label>
                  <input
                    type='password'
                    name='password2'
                    id='password2'
                    className='form-control'
                  />
                  <br />
                  <input type='file' name='imageURL'></input>
                  <br />
                  <div className='text-center mt-4'>
                    <MDBBtn color='unique' type='submit'>
                      Register
                    </MDBBtn>
                  </div>
                </form>
                <a href='http://localhost:5000/user/google'>Google Signin.</a>{" "}
                <br></br>
                <a href='http://localhost:5000/user/facebook'>
                  Facebook Signin.
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
    // }
  }
}

export default connect(null, {
  userRegister,
})(Register);
