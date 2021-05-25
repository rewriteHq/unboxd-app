import { GiftType, WishList } from '../../../../../typings';

export const SET_WISHLIST = 'SET_WISHLIST';
export const SET_GIFT = 'SET_GIFT';

export interface EventState {
  data: {wishlist: WishList | null; gift: GiftType | null};
  error: null;
}

type SetWishlist = {
  type: typeof SET_WISHLIST;
  payload: WishList;
};

type SetGift = {
  type: typeof SET_GIFT;
  payload: GiftType;
};

export type EventActionTypes = SetWishlist | SetGift;
