import { EventActionTypes, EventState, SET_WISHLIST } from './types';

const initialState: EventState = {
  data: null,
  error: null,
};

function reducer(state = initialState, action: EventActionTypes) {
  switch (action.type) {
    case SET_WISHLIST:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default reducer;
