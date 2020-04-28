import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const ONLIKE = "ONLIKE";

export const onLike = createAction(ONLIKE);

const initialState = {
  content: {},
};

export default handleActions(
  {
    [ONLIKE]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.content = payload;
      });
    },
  },
  initialState
);
