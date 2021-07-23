import { SET_AUTH_TOKEN, SET_USER_DETAILS } from "../actionTypes";
import isEmpty from "../../utils/isEmpty";

const authInitialState = {
  isAuthenticated: false,
  token: null,
  user: {},
};

export default function (state = authInitialState, action) {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
