import React from 'react'
import {Component} from 'react'
import axios from 'axios'

import '../../App.css';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    change(e){
        this.setState({
            [e.target.name] : e.target.value

        })
    }

    submit(e){
        e.preventDefault()
        axios.post('/user/login', { email: this.state.email, password: this.state.password }).then(res => {
            localStorage.setItem('jwt', res.data)})
    }
 
  render(){
    return (
        <div className="App">
            <form onSubmit={ e => this.submit(e)}>
                <input type="text" name="email" onChange = { e => this.change(e) } value={this.state.email} />
                <input type="password"  name="password" onChange = { e => this.change(e) } value={this.state.password}/>
                <button type="submit">Submit</button>
            </form>
            <a href="http://localhost:5000/user/google" >Login using Google.</a> <br></br>
            <a href="http://localhost:5000/user/facebook" >Login using Facebook</a>
        </div>
    );
  }
 
}

export default Login;
