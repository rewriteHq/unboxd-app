import { InitialState, SET_WALLET, WalletActionTypes } from './types';

const initialState: InitialState = {
  data: {},
  error: null,
  isLoading: true,
};

const reducer = (state = initialState, action: WalletActionTypes) => {
  switch (action.type) {
    case SET_WALLET:
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
