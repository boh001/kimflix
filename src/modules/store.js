import { createStore, combineReducers } from "redux";
import count from "./reducers/count";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ count });
const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());
console.log(store.dispatch({type:"ADD"}));
console.log(store.getState());
console.log(store.dispatch({type:"ADD"}));
export default store;
