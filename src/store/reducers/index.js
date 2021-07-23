import { combineReducers } from "redux";
import settingsReducer from "./settings";
import authReducer from "./auth";
// import errorReducer from './error'
// import vehicleReducer from './vehicles'
// import resourceReducer from './resources'
// import configReducer from './config'
// import languageReducer from './language'

export default combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  //   error: errorReducer,
  //   vehicles: vehicleReducer,
  //   resources: resourceReducer,
  //   config: configReducer,
  //   language: languageReducer,
});
