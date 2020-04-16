import { createStore, combineReducers } from "redux";
import data from "./reducers/data";
import loading from "./reducers/loading";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ data, loading });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
