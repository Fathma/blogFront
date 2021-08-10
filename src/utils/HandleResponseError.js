import {
    setNetworkError,
    setUnauthorizedError,
    setInternalServerError
  } from "../store/actions/error";
  
  const handleRequestError = (error, dispatch) => {
    if (!error.response) {
      dispatch(setNetworkError());
      throw error;
    } else {
      if (error.response.status === 401) {
        dispatch(setUnauthorizedError());
      } else if (error.response.status === 500) {
        dispatch(setInternalServerError());
      }
      throw error;
    }
  };
  
  export default handleRequestError;
  