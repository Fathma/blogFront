import React from 'react';
import {Component} from 'react';

import '../../App.css';
import axios from 'axios';

class Post extends Component {
  constructor(){
    super()
    this.state={}
  }

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    if( !jwt ) this.props.history.push('/login')

    axios.get('/post/allposts', { headers: { Authorization: `Bearer ${jwt}` } })
    .then( res => this.setState({ posts: res.data }))
    .catch( err => this.props.history.push('/login'))
  }
  
  render(){
    if (this.state.posts !== undefined ){
     return(
      <div>
        {this.state.posts.map((post)=>{
          return (
            <div>
              <a href={'/details/'+post._id}>
              Title: { post.title } <br />
              Author: { post.author.name }<br />
              Body: { post.body }<br /><br />
              </a>
            </div>
          )
        })}
       </div>
     )
   }else{
     return(
       <p>loading.......</p>
     )
   }
}    
  
}


export default Post;
