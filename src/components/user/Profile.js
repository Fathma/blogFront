import React, { useState, useEffect } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import { getUserDetails } from "../../store/actions/user";

// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   componentDidMount() {
//     axios
//       .get("/user/profile", {
//         headers: { Authorization: `Bearer ${this.props.token}` },
//       })
//       .then((res) => {
//         this.setState({ user: res.data });
//         axios
//           .get("/user/profile", {
//             headers: { Authorization: `Bearer ${this.props.token}` },
//           })
//           .then((res) => this.setState({ userPost: res.data }))
//           .catch((err) => this.props.history.push("/login"));
//       })
//       .catch((err) => this.props.history.push("/login"));
//   }

//   render() {
//     if (this.state.user !== undefined) {
//       return <p>{this.state.user.email} </p>;
//     } else {
//       return <p>loading.......</p>;
//     }
//   }
// }

const Profile = ({ token, getUserDetails }) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    get_user_details();
  }, []);

  const get_user_details = async () => {
    let res = await getUserDetails(token);
    console.log(res);
    setuser(res.data);
  };

  if (user !== null) {
    return <p>{user.email} </p>;
  } else {
    return <p>loading.......</p>;
  }
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { getUserDetails })(Profile);
