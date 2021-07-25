import axios from "axios";
import { USER_API_BASEURL } from "../../config";
import AuthHeader from "../../utils/AuthHeader";

export const userRegister = (data) => async (dispatch) => {
  try {
    let res = await axios.post(`${USER_API_BASEURL}/user/register/`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = (token) => async (dispatch) => {
  try {
    let res = await axios.get(
      `${USER_API_BASEURL}/user/profile/`,
      AuthHeader()
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
