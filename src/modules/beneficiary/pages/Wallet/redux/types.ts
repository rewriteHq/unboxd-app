export const SET_WALLET = 'SET_WALLET';
export const SET_BANKS = 'SET_BANKS';
export const SET_LOADING = 'SET_LOADING';

interface SetWallet {
  type: typeof SET_WALLET;
  payload: {};
}

interface SetBanks {
  type: typeof SET_BANKS;
  payload: {};
}

interface SetLoading {
  type: typeof SET_LOADING;
}
export interface InitialState {
  banks: {};
  data: {};
  error: null;
  isLoading: boolean;
}

export type WalletActionTypes = SetWallet | SetBanks | SetLoading;
