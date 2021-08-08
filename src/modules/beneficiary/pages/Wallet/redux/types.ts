export const SET_WALLET = 'SET_WALLET';

interface SetWallet {
  type: typeof SET_WALLET;
  payload: {};
}

export interface InitialState {
  data: {};
  error: null;
  isLoading: boolean;
}

export type WalletActionTypes = SetWallet;
