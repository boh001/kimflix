import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const ONDATA = "ONDATA";

export const onData = createAction(ONDATA);

const initialState = {
  content: {
    nowPlaying: [],
    upcoming: [],
    popular: [],
    latest: [],
  },
};

export default handleActions(
  {
    [ONDATA]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.content = payload;
      });
    },
  },
  initialState
);
