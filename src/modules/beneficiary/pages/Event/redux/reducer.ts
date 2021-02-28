import { EventActionTypes, InititalState, SET_CATEGORIES } from './types';

const inititalState: InititalState = {
  categories: [],
};

function reducer(state = inititalState, action: EventActionTypes) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
