import { WishList } from '../../../../../typings';

//event reducer types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_WISHLIST = 'SET_WISHLIST';
export const SET_WALLET = 'SET_WALLET';

export interface Category {
  name: string;
  _id: string;
}

interface SetWishlist {
  type: typeof SET_WISHLIST;
  payload: any;
}

interface SetWallet {
  type: typeof SET_WISHLIST;
  payload: WishList;
}

export interface WishlistState {
  data: WishList | null;
  error: null;
}

export interface WalletState {
  data: null;
  error: null;
}

export type EventActionTypes = SetWishlist | SetWallet;
