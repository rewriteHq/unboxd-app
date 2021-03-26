import { ResourceState, ResourceActionTypes, SET_CATEGORIES } from './types';

const initialState: ResourceState = {
  data: {
    categories: [],
  },
  error: null,
};

function reducer(state = initialState, action: ResourceActionTypes) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, data: { ...state.data, categories: action.payload } };
    default:
      return state;
  }
}

export default reducer;
