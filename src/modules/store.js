import { createStore, combineReducers } from "redux";
import data from "./reducers/data";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ data });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
