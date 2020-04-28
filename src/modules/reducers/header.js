import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SCROLL = "SCROLL";
const SEARCH = "SEARCH";

export const onScroll = createAction(SCROLL);
export const onSearch = createAction(SEARCH);

const initialState = {
  scroll: false,
  search: false,
};

export default handleActions(
  {
    [SCROLL]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.scroll = payload;
      });
    },
    [SEARCH]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.search = payload;
      });
    },
  },
  initialState
);
