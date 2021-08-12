import { WishList } from '../../../../../typings';

export const SET_WISH_LIST = 'SET_WISH_LIST';
export const SET_LOADING = 'SET_LOADING';

export interface IAction {
  payload: WishList[] | any;
  type: string;
}

export interface ISetLoading {
  type: boolean;
  payload: false;
}

export type WishListDataTypes = ISetLoading | IAction;