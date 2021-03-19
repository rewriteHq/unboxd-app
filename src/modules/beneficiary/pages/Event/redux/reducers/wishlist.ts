import { EventActionTypes, SET_WISHLIST, WishlistState } from '../types';

const inititalState: WishlistState = {
  data: null,
  error: null,
};

const reducer = (state = inititalState, action: EventActionTypes) => {
  switch (action.type) {
    case SET_WISHLIST:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
