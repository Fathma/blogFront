import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NetworkError from "../components/snippets/NetworkError";
import InternalServerError from "../components/snippets/InternalServerError";
import Loader from "../components/snippets/Loader";
// import NetworkError from "../components/snippets/NetworkError";
// import InternalServerError from "../components/snippets/InternalServerError";
import PageTitle from "../components/layouts/PageTitle";
import Nav from "../components/layouts/Nav";
import { Container } from '@material-ui/core';


const PrivateRoute = ({ auth, component: Component, roles, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated) {
          return (
            <div className='app-container'>
              {/* <PageTitle
                        TITLE={auth.tenant_info.tenant_name}
                        LOGO={auth.tenant_info.tenant_logo}
                        /> */}

              <Nav />
              <div className='main-content'>

                <Container maxWidth="sm">
                  <Component {...props} />
                </Container>
                
              </div>

              <Loader />
              <NetworkError />
              <InternalServerError />
            </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
