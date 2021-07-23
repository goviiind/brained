import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const middleware = [thunk];

const initial_state = {};

const store = createStore(
  rootReducer,
  initial_state,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
