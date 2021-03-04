import {
  ADD_CATEGORY,
  EventActionTypes,
  InititalState,
  SET_CATEGORIES,
} from './types';

const inititalState: InititalState = {
  categories: [],
  categoryGroup: {},
};

function reducer(state = inititalState, action: EventActionTypes) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categoryGroup: {
          ...state.categoryGroup,
          [action.payload._id]: action.payload,
        },
      };
    default:
      return state;
  }
}

export default reducer;
