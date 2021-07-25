import { store } from "../store/configureStore";

const AuthHeader = (multipart = false) => {
  if (multipart) {
    return {
      headers: {
        Authorization: `Bearer ${store.getState().auth.token}`,
        "content-type": "multipart/form-data",
      },
    };
  }

  return {
    headers: {
      Authorization: `Bearer ${store.getState().auth.token}`,
    },
  };
};

export default AuthHeader;
