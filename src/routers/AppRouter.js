import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, withRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/auth/login";
import Register from "../components/user/Register";

export const history = createBrowserHistory();

const AppRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact={true} path='/register' component={Register} />
        <PublicRoute exact={true} path='/login' component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
