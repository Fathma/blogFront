import { SET_LOADER_STATUS } from "../actionTypes";

export const setLoaderStatus = (status) => (dispatch) => {
  dispatch({
    type: SET_LOADER_STATUS,
    payload: status,
  });
};
