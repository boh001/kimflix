import { createStore, combineReducers } from "redux";
import data from "./reducers/data";
import boolean from "./reducers/boolean";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ data, boolean });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
