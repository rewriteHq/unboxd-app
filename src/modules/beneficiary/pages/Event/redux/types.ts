import { WishList } from '../../../../../typings';

//event reducer types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_WISHLIST = 'SET_WISHLIST';
export const SET_WALLET = 'SET_WALLET';
export const SET_WISHLIST_LOADING = "SET_WISHLIST_LOADING";
export const UNSET_WISHLIST = "UNSET_WISHLIST";

export interface Category {
  name: string;
  _id: string;
}

interface SetWishlist {
  type: typeof SET_WISHLIST;
  payload: any;
}

interface UnSetWishlist {
  type: typeof UNSET_WISHLIST;
}

interface SetWallet {
  type: typeof SET_WALLET;
  payload: WishList;
}

interface SetWishlistLoading {
  type: typeof SET_WISHLIST_LOADING;
}

export interface WishlistState {
  data: WishList | null;
  error: null;
  isLoading: boolean;
}

export interface WalletState {
  data: null;
  error: null;
}

export type EventActionTypes = SetWishlist | UnSetWishlist | SetWallet | SetWishlistLoading;
