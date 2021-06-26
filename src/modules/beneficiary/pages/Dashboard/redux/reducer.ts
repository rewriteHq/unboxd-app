import { SET_WISH_LIST, IAction } from './types';

const initialState = {
  data: [],
};

function reducer(state = initialState, { type, payload }: IAction) {
  switch (type) {
    case SET_WISH_LIST:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
}

export default reducer;
