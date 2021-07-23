import { combineReducers } from "redux";
import auth from "./authReducer";
import profile from "./profileReducers";

const rootReducer = combineReducers({
  auth,
  profile,
});

export default rootReducer;
