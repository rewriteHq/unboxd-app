import { WishList } from '../../../../../typings';

export const SET_WISH_LIST = 'SET_WISH_LIST';

export interface IAction {
  payload: WishList[] | any;
  type: string;
}
