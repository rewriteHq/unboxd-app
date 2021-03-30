import { InitialState, SET_WALLET, WalletActionTypes } from './types';

const initialState: InitialState = {
  data: {},
  error: null,
};

const reducer = (state = initialState, action: WalletActionTypes) => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
