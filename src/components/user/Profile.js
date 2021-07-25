import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getUserDetails } from "../../store/actions/user";
import { setLoaderStatus } from "../../store/actions/settings";

const Profile = ({ getUserDetails, setLoaderStatus }) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    get_user_details();
  }, []);

  const get_user_details = async () => {
    setLoaderStatus(true);
    let res = await getUserDetails();
    setuser(res.data);
    setLoaderStatus(false);
  };

  return <p>{user != null ? user.email : ""}</p>;
};

const mapStateToProps = (state) => ({
  // token: state.auth.token,
});

export default connect(mapStateToProps, { getUserDetails, setLoaderStatus })(
  Profile
);
