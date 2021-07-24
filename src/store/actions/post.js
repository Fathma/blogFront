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
