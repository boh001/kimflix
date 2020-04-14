import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SCROLL_TRUE = "SCROLL_TRUE";
const SEARCH_TRUE = "SEARCH_TRUE";
const SHOW_TRUE = "SHOW_TRUE";
const DETAIL_TRUE = "DETAIL_TRUE";
const SOUND_TRUE = "SOUND_TRUE";
const END_TRUE = "END_TRUE";
const PLAY_TRUE = "PLAY_TRUE";

export const scroll_true = createAction(SCROLL_TRUE);
export const search_true = createAction(SEARCH_TRUE);
export const show_true = createAction(SHOW_TRUE);
export const detail_true = createAction(DETAIL_TRUE);
export const sound_true = createAction(SOUND_TRUE);
export const end_true = createAction(END_TRUE);
export const play_true = createAction(PLAY_TRUE);

const initialState = {
  scroll: false,
  search: false,
  show: false,
  detail: false,
  sound: false,
  end: false,
  play: false,
};

export default handleActions(
  {
    [SCROLL_TRUE]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.scroll = payload;
      }),
    [SEARCH_TRUE]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.search = !payload;
      }),
    [SHOW_TRUE]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.show = payload;
      }),
    [DETAIL_TRUE]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.detail = payload;
      }),
    [SOUND_TRUE]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.sound = !payload;
      }),
    [END_TRUE]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.end = payload;
      }),
    [PLAY_TRUE]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.play = payload;
      }),
  },
  initialState
);
