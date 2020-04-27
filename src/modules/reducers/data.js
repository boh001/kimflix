import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const ONDATA = "ONDATA";
const ONDETAIL = "ONDETAIL";

export const onData = createAction(ONDATA);
export const onDetail = createAction(ONDETAIL);

const initialState = {
  content: {
    nowPlaying: [],
    upcoming: [],
    popular: [],
    latest: [],
  },
  details: {
    detail: {},
    similar: [],
    cast: [],
  },
};

export default handleActions(
  {
    [ONDATA]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.content = payload;
      });
    },
    [ONDETAIL]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.details.detail = payload.detail;
        draft.details.similar = payload.similar;
        draft.details.cast = payload.cast;
      });
    },
  },
  initialState
);
