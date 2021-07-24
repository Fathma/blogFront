import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, withRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/auth/login";
import Register from "../components/user/Register";
import Profile from "../components/user/Profile";
import AllPosts from "../components/post/AllPosts";
import CreatePost from "../components/post/CreatePost";
import PostDetails from "../components/post/PostDetails";

export const history = createBrowserHistory();

const AppRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact={true} path='/register' component={Register} />
        <PublicRoute exact={true} path='/login' component={Login} />
        <PrivateRoute exact={true} path='/profile' component={Profile} />
        <PrivateRoute exact={true} path='/allpost' component={AllPosts} />
        <PrivateRoute exact={true} path='/createpost' component={CreatePost} />
        <PrivateRoute
          exact={true}
          path='/details/:id'
          component={PostDetails}
        />
      </Switch>
    </Router>
  );
};

export default AppRoute;
