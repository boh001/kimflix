import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
const ADD = "ADD";

export const add = createAction(ADD,()=>"hi");

const initialState = {
  number: 0,
};
console.log(add());

const count = handleActions(
  {
    [ADD]: (state,action) => produce(state,draft =>{
      console.log(action);
      
      console.log(state)
      console.log(draft)
      return draft.number+1
    })   
  },initialState
);
console.log(count);


// export default (state = initialState.number, action) => {
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     default:
//       return state;
//   }
// };
export default count;
