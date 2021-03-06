import { createStore, combineReducers } from "redux";
import data from "./reducers/data";
import loading from "./reducers/loading";
import video from "./reducers/video";
import like from "./reducers/like";
import header from "./reducers/header";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ data, loading, video, like, header });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
