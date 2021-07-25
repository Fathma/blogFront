import axios from "axios";
import { POST_API_BASEURL } from "../../config";

export const getPosts = (token) => async (dispatch) => {
  try {
    let res = await axios.get(`${POST_API_BASEURL}/post/allposts/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment =
  (token, comment_id, post_id) => async (dispatch) => {
    try {
      let res = await axios.delete(
        `${POST_API_BASEURL}/post/deletecomment/${comment_id}/${post_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return res;
    } catch (error) {
      console.log(error);
    }
  };

export const saveComment = (token, post_id) => async (dispatch) => {
  try {
    let res = await axios.post(
      `${POST_API_BASEURL}/post/addcomment/${post_id}`,
      { comment: this.state.comment },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (token, post_id, comment) => async (dispatch) => {
  try {
    let res = await axios.get(`${POST_API_BASEURL}/post/getposts/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
      comment: comment,
    });
    return res;
  } catch (error) {}
};
