import React from 'react';
import {Component} from 'react';

import '../../App.css';

class Reg extends Component {
 
  render(){
    return (
      <div className="App">
       <form action="/user/register" method="POST">
           <input name="name" placeholder="name"/>
           <input name="email" placeholder="email"/>
           <input name="role" placeholder="role"/>
           <input name="password" placeholder="password"/>
           <input name="password2" placeholder="password2"/>
           <button type="submit">Submit</button>
       </form>
       <a href="http://localhost:5000/user/google" >Google Signin.</a> <br></br>
       <a href="http://localhost:5000/user/facebook" >Facebook Signin.</a>

      </div>
    );
  }
 
}

export default Reg;
