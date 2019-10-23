import React from 'react';
import {Component} from 'react';

import '../../App.css';
import axios from 'axios';

class List extends Component {
  constructor(){
    super()
    this.state={}
  }

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    if( !jwt ) this.props.history.push('/login')

    axios.get('/user/profile', { headers: { Authorization: `Bearer ${jwt}` } })
    .then( res => this.setState({ user: res.data }))
    .catch( err => this.props.history.push('/login'))
  }

  render(){
    if (this.state.user !== undefined ){
        return(
            <p>{ this.state.user.email }</p>
        )
    }else{
        return(
        <p>loading.......</p>
        )
    }
  }
}

export default List;
