import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppRouter from "./routers/AppRouter";

import { store, persistor } from "../src/store/configureStore";

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
