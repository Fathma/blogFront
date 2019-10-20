import React from 'react';
import {Component} from 'react';

import '../../App.css';

class List extends Component {
  constructor(){
    super()
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    fetch('/user/list').then(res=> res.json()).then((users)=>{ this.setState({users})})
  }
  render(){
    return (
      <div className="App">
       <ul>
           {this.state.users.map((user)=>{
               return <li>{user.email}</li>
           })}
       </ul>
      </div>
    );
  }
 
}

export default List;
