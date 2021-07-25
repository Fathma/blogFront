import React, { useState, useEffect } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../../store/actions/post";
import { setLoaderStatus } from "../../store/actions/settings";

const AllPosts = ({ getPosts, setLoaderStatus }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    get_posts();
  }, []);

  const get_posts = async () => {
    setLoaderStatus(true);
    let res = await getPosts();
    setPosts(res.data);
    setLoaderStatus(false);
  };

  return (
    <div>
      {posts != null &&
        posts.map((post) => {
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
};

const mapStateToProps = (state) => ({
  // token: state.auth.token,
});

export default connect(mapStateToProps, { getPosts, setLoaderStatus })(
  AllPosts
);
