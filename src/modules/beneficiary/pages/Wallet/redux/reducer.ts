import { InitialState, SET_BANKS, SET_LOADING, SET_WALLET, WalletActionTypes } from './types';

const initialState: InitialState = {
  banks: {},
  data: {},
  error: null,
  isLoading: true,
};

const reducer = (state = initialState, action: WalletActionTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_WALLET:
      return { ...state, data: action.payload, isLoading: false };
    case SET_BANKS:
      return {
        ...state,
        banks: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
