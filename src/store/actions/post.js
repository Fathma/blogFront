import axios from "axios";
import { POST_API_BASEURL } from "../../config";
import AuthHeader from "../../utils/AuthHeader";

export const getPosts = () => async (dispatch) => {
  try {
    let res = await axios.get(
      `${POST_API_BASEURL}/post/allposts/`,
      AuthHeader()
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (comment_id, post_id) => async (dispatch) => {
  try {
    let res = await axios.delete(
      `${POST_API_BASEURL}/post/deletecomment/${comment_id}/${post_id}`,
      AuthHeader()
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const saveComment = (post_id, comment) => async (dispatch) => {
  try {
    let res = await axios.post(
      `${POST_API_BASEURL}/post/addcomment/${post_id}`,
      { comment: comment },
      AuthHeader()
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

export const createPost = (data) => async (dispatch) => {
  try {
    let res = await axios.post(
      `${POST_API_BASEURL}/post/create/`,
      data,
      AuthHeader()
    );
    return res;
  } catch (error) {}
};
