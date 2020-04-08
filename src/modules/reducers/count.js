import { createAction, handleActions } from "redux-actions";

const ADD = "ADD";

export const add = createAction(ADD);
const initialState = {
  number: 0,
};
const count = handleActions(
  {
    ADD: (state) => {
      return {
        number: state.number + 1,
      };
    },
  },
  initialState
);
// export default (state = initialState.number, action) => {
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     default:
//       return state;
//   }
// };
export default count;
