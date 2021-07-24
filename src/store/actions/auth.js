import axios from "axios";
import { USER_API_BASEURL } from "../../config";
import { SET_AUTH_TOKEN, SET_USER_DETAILS } from "../actionTypes";

export const login = (data) => async (dispatch) => {
  try {
    let res = await axios.post(`${USER_API_BASEURL}/user/login`, data);

    dispatch({
      type: SET_AUTH_TOKEN,
      payload: res.data.token,
    });
    dispatch({
      type: SET_USER_DETAILS,
      payload: res.data.user,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
