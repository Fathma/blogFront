import React from 'react';
import {Component} from 'react';

import '../../App.css';
import axios from 'axios';

class Postdetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            err:'',
            comment: '',
            post_id:''
        }
        
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }
    getData= ()=>{
        const jwt = localStorage.getItem('jwt')
        if( !jwt ) this.props.history.push('/login')
        return (
            axios.get( `/post/postdetails/${this.props.match.params.id}` , { headers: { Authorization: `Bearer ${jwt}` }})
            .then( res =>this.setState({ post: res.data,loading: false }))
            .catch( err => this.props.history.push('/login'))
        )
    }

    componentDidMount(){
        this.getData()
    }

    // new comment

    change(e) {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    submit(e) {
        e.preventDefault()
        
        axios.post(`/post/addcomment/${this.props.match.params.id}`, { comment: this.state.comment }).then(res => {
            
        })
    }
  
  render(){
    
        if(this.state.loading == true){
            return(
            <ul>      
                <li>loading....</li>             
            </ul>
            )
            
        }else{
            return(
               <div>
                   Title: {this.state.post.title}<br />
                   Author: {this.state.post.author.name}<br />
                   Body: {this.state.post.body}<br />
                   likes: {this.state.post.likes.length}<br />
                   comments: <form onSubmit={e => this.submit(e)}>
                                <input type="hidden" name="post_id" value={this.state.post_id}  onChange={e => this.change(e)} />
                                <textarea name="comment"  onChange={e => this.change(e)}></textarea>
                                <button>submit</button>
                            </form>
                   {this.state.post.comments.map(comment=>{
                       return(
                        <div>
                         <p>{comment.comment} <a href="#">{comment.user.name}</a></p>
                        </div>
                       )
                   })}
               </div>
            )
        }
    
    
        
  }
 
}

export default Postdetails;