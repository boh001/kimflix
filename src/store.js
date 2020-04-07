import { createStore } from "redux";
const ADD = "ADD";
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return state;
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
