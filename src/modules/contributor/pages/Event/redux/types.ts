import { WishList } from '../../../../../typings';

export const SET_WISHLIST = 'SET_WISHLIST';

export interface EventState {
  data: WishList | null;
  error: null;
}

type SetWishlist = {
  type: typeof SET_WISHLIST;
  payload: WishList;
};

export type EventActionTypes = SetWishlist;
