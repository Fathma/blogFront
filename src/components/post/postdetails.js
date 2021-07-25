import React, { useState, useEffect } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteComment, saveComment, getPost } from "../../store/actions/post";
import { setLoaderStatus } from "../../store/actions/settings";

const PostDetails = ({
  token,
  deleteComment,
  saveComment,
  getPost,
  setLoaderStatus,
}) => {
  const params = useParams();
  const [data, setData] = useState({
    comment: "",
    post_id: "",
  });
  const [post, setPost] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoaderStatus(true);
    let res = await getPost(token, params.id, data.comment);

    setPost(res.data);
    setLoaderStatus(false);
  };

  const change = (e) => {
    setData({
      [e.target.name]: e.target.value,
    });
  };

  const save_comment = async (e) => {
    e.preventDefault();
    setLoaderStatus(true);
    let res = await saveComment();
    setLoaderStatus(false);
    window.location.reload();
  };

  const delete_comment = async (e, comment_id) => {
    e.preventDefault();
    setLoaderStatus(true);
    let res = await deleteComment(token, comment_id, params.id);
    setLoaderStatus(false);
    window.location.reload();
  };

  return (
    <div>
      {post != null && (
        <>
          Title: {post.title}
          <br />
          Author: {post.author.name}
          <br />
          Body: {post.body}
          <br />
          likes: {post.likes.length}
          <br />
          comments:{" "}
          <form onSubmit={(e) => save_comment(e)}>
            <input
              type='hidden'
              name='post_id'
              value={post._id}
              onChange={(e) => change(e)}
            />
            <textarea name='comment' onChange={(e) => change(e)}></textarea>
            <button>submit</button>
          </form>
          {post.comments.map((comment) => {
            return (
              <div key={comment._id}>
                <p>
                  {comment.comment} <a href='/profile'>{comment.user.name}</a>
                  <button onClick={(e) => delete_comment(e, comment._id)}>
                    X
                  </button>
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, {
  deleteComment,
  saveComment,
  getPost,
  setLoaderStatus,
})(PostDetails);
