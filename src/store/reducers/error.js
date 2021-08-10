import {
    SET_NETWORK_ERRORS,
    CLEAR_NETWORK_ERRORS,
    SET_UNAUTHORIZED_ERRORS,
    CLEAR_UNAUTHORIZED_ERRORS,
    SET_INTERNAL_SERVER_ERRORS,
    CLEAR_INTERNAL_SERVER_ERRORS
  } from "../actionTypes";
  
  const initialErrorState = {
    networkError: false,
    unauthorizedError: false,
    internalServerError: false
  };
  
  export default (state = initialErrorState, action) => {
    switch (action.type) {
      case SET_NETWORK_ERRORS:
        return {
          ...state,
          networkError: action.payload,
          internalServerError: false
        };
      case CLEAR_NETWORK_ERRORS:
        return {
          ...state,
          networkError: action.payload
        };
      case SET_UNAUTHORIZED_ERRORS:
        return {
          ...state,
          unauthorizedError: action.payload
        };
      case CLEAR_UNAUTHORIZED_ERRORS:
        return {
          ...state,
          unauthorizedError: action.payload
        };
      case SET_INTERNAL_SERVER_ERRORS:
        return {
          ...state,
          internalServerError: action.payload,
          networkError: false
        };
      case CLEAR_INTERNAL_SERVER_ERRORS:
        return {
          ...state,
          internalServerError: action.payload
        };
      default:
        return state;
    }
  };
  