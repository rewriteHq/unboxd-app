import { EventActionTypes, InititalState, SET_CATEGORIES } from './types';

const inititalState: InititalState = {
  data: [],
  error: null,
};

function reducer(state = inititalState, action: EventActionTypes) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
