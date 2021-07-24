import React, { useState, useEffect } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../../store/actions/post";

// class AllPosts extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   componentDidMount() {
//     axios
//       .get("/post/allposts", { headers: { Authorization: `Bearer ${jwt}` } })
//       .then((res) => this.setState({ posts: res.data }))
//       .catch((err) => this.props.history.push("/login"));
//   }

//   render() {
//     if (this.state.posts !== undefined) {
//       return (
//         <div>
//           {this.state.posts.map((post) => {
//             return (
//               <div>
//                 <a href={"/details/" + post._id}>
//                   Title: {post.title} <br />
//                   Author: {post.author.name}
//                   <br />
//                   Body: {post.body}
//                   <br />
//                   <br />
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       );
//     } else {
//       return <p>loading.......</p>;
//     }
//   }
// }

const AllPosts = ({ token, getPosts }) => {
  const [posts, setposts] = useState(null);

  useEffect(() => {
    get_posts();
  }, []);

  const get_posts = async () => {
    let res = await getPosts(token);
    setposts(res.data);
  };

  if (posts !== null) {
    return (
      <div>
        {posts.map((post) => {
          return (
            <div>
              <a href={"/details/" + post._id}>
                Title: {post.title} <br />
                Author: {post.author.name}
                <br />
                Body: {post.body}
                <br />
                <br />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <p>loading.......</p>;
  }
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { getPosts })(AllPosts);
