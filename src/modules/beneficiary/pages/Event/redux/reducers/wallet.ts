import { WalletState, EventActionTypes } from '../types';

const initialState: WalletState = {
  data: null,
  error: null,
};

const reducer = (state = initialState, action: EventActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
