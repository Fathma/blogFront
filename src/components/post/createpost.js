import React from 'react'
import { Component } from 'react'
import axios from 'axios'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact'


import '../../App.css'


class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }
        this.change = this.change.bind(this)
        this.submit1 = this.submit1.bind(this)
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit1(e) {
        e.preventDefault()
        
        let jwtt = localStorage.getItem('jwt')
        if( !jwtt ) this.props.history.push('/login')

        axios.post('/post/create', { title: this.state.title, body: this.state.body }, { headers: { Authorization: `Bearer ${jwtt}`} })
        .then(res => {
            this.props.history.push('/allpost')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
           
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard style={{ align: "center" }}>
                            <MDBCardBody className="mx-4">
                                <form onSubmit={e => this.submit1(e)} >
                                    <p className="h5 text-center mb-4">Create Post</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Type your title"
                                            onChange={e => this.change(e)}
                                            value={this.state.email}
                                            name="title"
                                            icon="envelope"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Type your body"
                                            onChange={e => this.change(e)}
                                            value={this.state.body}
                                            type="textarea"
                                            name="body"
                                            icon="lock"
                                            row= '5'
                                            group
                                            validate
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <MDBBtn color="unique" type="submit">Create</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

}

export default CreatePost;
