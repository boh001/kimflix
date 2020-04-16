import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const ONLOAD = "ONLOAD";

export const onLoad = createAction(ONLOAD);

const initialState = {
  loading: true,
};

export default handleActions(
  {
    [ONLOAD]: (state, { payload }) => {
      return produce(state, (draft) => {
        console.log(draft.loading);
        draft.loading = payload;
      });
    },
  },
  initialState
);
