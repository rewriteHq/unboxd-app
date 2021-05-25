import { EventActionTypes, EventState, SET_GIFT, SET_WISHLIST } from './types';

const initialState: EventState = {
  data: {wishlist: null, gift: null},
  error: null,
};

function reducer(state = initialState, action: EventActionTypes) {
  switch (action.type) {
    case SET_WISHLIST:
      return { ...state, data: {...state.data, wishlist: action.payload} };
    case SET_GIFT:
      return { ...state, data: {...state.data, gift: action.payload} };
    default:
      return state;
  }
}

export default reducer;
