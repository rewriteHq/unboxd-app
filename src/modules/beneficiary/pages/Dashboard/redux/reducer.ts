import { SET_WISH_LIST, SET_LOADING, WishListDataTypes } from './types';

const initialState = {
  data: [],
  loading: false,
};

function reducer(state = initialState, { type, payload }: WishListDataTypes) {
  switch (type) {
    case SET_WISH_LIST:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default reducer;
