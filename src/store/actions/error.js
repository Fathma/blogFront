import {
    SET_NETWORK_ERRORS,
    CLEAR_NETWORK_ERRORS,
    SET_UNAUTHORIZED_ERRORS,
    CLEAR_UNAUTHORIZED_ERRORS,
    SET_INTERNAL_SERVER_ERRORS,
    CLEAR_INTERNAL_SERVER_ERRORS
  } from "../actionTypes";
  
  export const setNetworkError = () => {
    return {
      type: SET_NETWORK_ERRORS,
      payload: true
    };
  };
  
  export const clearNetworkError = () => {
    return {
      type: CLEAR_NETWORK_ERRORS,
      payload: false
    };
  };
  
  export const setUnauthorizedError = () => {
    return {
      type: SET_UNAUTHORIZED_ERRORS,
      payload: true
    };
  };
  
  export const clearUnauthorizedError = () => {
    return {
      type: CLEAR_UNAUTHORIZED_ERRORS,
      payload: false
    };
  };
  
  export const setInternalServerError = () => {
    return {
      type: SET_INTERNAL_SERVER_ERRORS,
      payload: true
    };
  };
  
  export const clearInternalServerError = () => {
    return {
      type: CLEAR_INTERNAL_SERVER_ERRORS,
      payload: false
    };
  };
  