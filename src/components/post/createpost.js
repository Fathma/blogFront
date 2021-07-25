import React, { useState } from "react";
import { connect } from "react-redux";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

import { Button } from "@material-ui/core";
import { createPost } from "../../store/actions/post";

const CreatePost = ({ createPost }) => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    let res = await createPost(data);

    window.location.replace("/allpost");
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard style={{ align: "center" }}>
            <MDBCardBody className='mx-4'>
              <form onSubmit={(e) => submit(e)}>
                <p className='h5 text-center mb-4'>Create Post</p>
                <div className='grey-text'>
                  <MDBInput
                    label='Type your title'
                    onChange={(e) => change(e)}
                    value={data.title}
                    name='title'
                    icon='envelope'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                  />
                  <MDBInput
                    label='Type your body'
                    onChange={(e) => change(e)}
                    value={data.body}
                    type='textarea'
                    name='body'
                    icon='lock'
                    row='5'
                    group
                    validate
                  />
                </div>
                <div className='text-center mt-4'>
                  <Button
                    variant='contained'
                    style={{ backgroundColor: "white" }}
                    type='submit'
                  >
                    Post
                  </Button>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default connect(null, { createPost })(CreatePost);
