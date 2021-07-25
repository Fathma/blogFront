import React, { useState } from "react";
import { connect } from "react-redux";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
} from "mdbreact";

import { Button } from "@material-ui/core";

import { login } from "../../store/actions/auth";
import { setLoaderStatus } from "../../store/actions/settings";

const Login = ({ setLoaderStatus, login }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoaderStatus(true);
    let res = await login(data);
    setLoaderStatus(false);
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard style={{ align: "center" }}>
            <MDBCardBody className='mx-4'>
              <form onSubmit={(e) => submit(e)}>
                <p className='h5 text-center mb-4'>Sign in</p>
                <div className='grey-text'>
                  <MDBInput
                    label='Type your email'
                    onChange={(e) => change(e)}
                    value={data.email}
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
                    onChange={(e) => change(e)}
                    value={data.password}
                    type='password'
                    name='password'
                    icon='lock'
                    group
                    type='password'
                    validate
                  />
                </div>
                <div className='text-center mt-4'>
                  <Button
                    variant='contained'
                    style={{ backgroundColor: "white" }}
                    type='submit'
                  >
                    Login
                  </Button>
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
  );
};

export default connect(null, { login, setLoaderStatus })(Login);
