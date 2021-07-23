import { SET_LOADER_STATUS } from "../actionTypes";

const authInitialState = {
  loader: false,
};

export default function (state = authInitialState, action) {
  switch (action.type) {
    case SET_LOADER_STATUS:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
}
