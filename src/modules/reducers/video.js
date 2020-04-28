import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const ONPLAY = "ONPLAY";
const ONSOUND = "ONSOUND";
const ONEND = "ONEND";

export const onPlay = createAction(ONPLAY);
export const onSound = createAction(ONSOUND);
export const onEnd = createAction(ONEND);

const initialState = {
  btn: {
    play: false,
    end: false,
    sound: false,
  },
};

export default handleActions(
  {
    [ONPLAY]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.btn.play = payload;
      });
    },
    [ONEND]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.btn.end = payload;
      });
    },
    [ONSOUND]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.btn.sound = payload;
      });
    },
  },
  initialState
);
