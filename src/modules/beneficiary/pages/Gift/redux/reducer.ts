import { InitialState, GiftActionTypes, ADD_GIFT } from './types';

const initialState: InitialState = {
  data: {},
  error: null,
};

function reducer(state = initialState, action: GiftActionTypes) {
  switch (action.type) {
    case ADD_GIFT:
      return {
        ...state,
        data: { ...state.data, [action.payload._id]: action.payload },
      };
    default:
      return state;
  }
}

export default reducer;
