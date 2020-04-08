import { createStore, combineReducers } from "redux";
import count from "./reducers/count";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ count });
const store = createStore(rootReducer, composeWithDevTools());

export default store;
