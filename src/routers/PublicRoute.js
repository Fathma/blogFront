import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Loader from "../components/snippets/Loader";
// import NetworkError from "../components/snippets/NetworkError";
// import InternalServerError from "../components/snippets/InternalServerError";
import PageTitle from "../components/layouts/PageTitle";
import Nav from "../components/layouts/Nav";

const PublicRoute = ({
  auth,
  getApiUrl,
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Redirect to={"/"} />
        ) : (
          <div className='auth-page'>
            {/* <PageTitle
              TITLE={tenant_info.tenant_name}
              LOGO={tenant_info.favicon_logo}
            /> */}

            <Component {...props} />
            <Loader />
          </div>
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PublicRoute);
