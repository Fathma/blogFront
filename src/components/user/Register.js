import React, { useState } from "react";
import { connect } from "react-redux";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

import { userRegister } from "../../store/actions/user";
import { Button } from "@material-ui/core";
import { setLoaderStatus } from "../../store/actions/settings";

const Register = ({ userRegister, setLoaderStatus }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const submit = async (e) => {
    e.preventDefault();
    setLoaderStatus(true);
    await userRegister(data);
    setLoaderStatus(false);
    window.location.replace("/login");
  };

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard style={{ align: "center" }}>
            <MDBCardBody className='mx-4'>
              <form
                onSubmit={(e) => submit(e)}
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
                  onChange={(e) => change(e)}
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
                  onChange={(e) => change(e)}
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
                  onChange={(e) => change(e)}
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
                  onChange={(e) => change(e)}
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
                  <Button
                    variant='contained'
                    style={{ backgroundColor: "white" }}
                    type='submit'
                  >
                    Register
                  </Button>
                </div>
              </form>
              <a href='http://localhost:5000/user/google'>Google Signin.</a>{" "}
              <br></br>
              <a href='http://localhost:5000/user/facebook'>Facebook Signin.</a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default connect(null, {
  userRegister,
  setLoaderStatus,
})(Register);
