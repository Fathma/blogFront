import React from 'react';
import { Component } from 'react';

import '../../App.css';
import axios from 'axios';

class List extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt')
    if (!jwt) this.props.history.push('/login')

    axios.get('/user/list', { headers: { Authorization: `Bearer ${jwt}` } })
      .then(res => {
        console.log(res.data)
        this.setState({ users: res.data })
      })
      .catch(err => this.props.history.push('/login'))
  }
  render() {
    if (this.state.users !== undefined) {
      return (
        <ul>
          {this.state.users.map((user) => {
            return (
              <div>
                <img src={user.imageURL} width="200" height="200" />
                <li>{user.email}</li>
              </div>

            )
          })}
        </ul>
      )
    } else {
      return (
        <p>loading.......</p>
      )
    }
  }

}

export default List;
