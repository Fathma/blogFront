// import React, { Component, Fragment } from "react";
// import List from "./components/user/List";
// import Login from "./components/auth/login";
// import Profile from "./components/user/Profile";
// import Post from "./components/post/allposts";
// import Postdetails from "./components/post/postdetails";
// import Createpost from "./components/post/createpost";

// import { MDBContainer } from "mdbreact";
// import Nav from "./components/layouts/Nav";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <MDBContainer>
//         <Router>
//           <div>
//             <div className='container'>
//               {/* <Navb /> */}
//               <Switch>
//                 <Route
//                   path='/list'
//                   exact
//                   render={(props) => {
//                     return (
//                       <Fragment>
//                         <Nav />
//                         <List />
//                       </Fragment>
//                     );
//                   }}
//                 />
//                 {/* <Route path="/register" exact component={Reg} /> */}
//                 {/* <Route path="/login" exact component={Login} /> */}
//                 <Route
//                   path='/profile'
//                   exact
//                   render={(props) => {
//                     return (
//                       <Fragment>
//                         <Nav />
//                         <Profile />
//                       </Fragment>
//                     );
//                   }}
//                 />
//                 <Route
//                   path='/allpost'
//                   exact
//                   render={(props) => {
//                     return (
//                       <Fragment>
//                         <Nav />
//                         <Post />
//                       </Fragment>
//                     );
//                   }}
//                 />
//                 <Route
//                   path='/details/:id'
//                   render={(props) => {
//                     return (
//                       <Fragment>
//                         <Nav />
//                         <Postdetails />
//                       </Fragment>
//                     );
//                   }}
//                 />
//                 <Route
//                   path='/createpost'
//                   exact
//                   render={(props) => {
//                     return (
//                       <Fragment>
//                         <Nav />
//                         <Createpost />
//                       </Fragment>
//                     );
//                   }}
//                 />
//               </Switch>
//             </div>
//           </div>
//         </Router>
//       </MDBContainer>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "../src/store/configureStore";

export const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
