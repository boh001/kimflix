import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const ONLOADHOME = "ONLOADHOME";
const ONLOADDETAIL = "ONLOADDETAIL";

export const onLoadHome = createAction(ONLOADHOME);
export const onLoadDetail = createAction(ONLOADDETAIL);

const initialState = {
  loading: {
    home: true,
    detail: true,
  },
};

export default handleActions(
  {
    [ONLOADHOME]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.loading.home = payload;
      });
    },
    [ONLOADDETAIL]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.loading.detail = payload;
      });
    },
  },
  initialState
);
