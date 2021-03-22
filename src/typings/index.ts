/**
 * FOR GLOBAL APP TYPE DEFINITIONS
 */

import {
  WalletState,
  WishlistState,
} from '../modules/beneficiary/pages/Event/redux/types';
import { GiftState } from '../modules/beneficiary/pages/Gift/redux/types';
import { ResourceState } from '../modules/resources/redux/types';

interface AppState {
  user: any;
  event: {
    list: WishlistState;
    wallet: WalletState;
  };
  gifts: GiftState;
  resources: ResourceState;
}

export interface Category {
  name: string;
  _id: string;
}

export interface GiftType {
  quantity: number;
  paid: 0 | 1 | boolean;
  _id: string;
  name: string;
  cost: number;
  imageURL: string;
}

export interface WishList {
  gifts: GiftType[];
  _id: string;
  title: string;
  coverImage: string;
  categoryID: Category;
  date: string;
  userID: string;
  description?: string;
}

export default AppState;
