/**
 * FOR GLOBAL APP TYPE DEFINITIONS
 */

import {
  WalletState,
  WishlistState,
} from '../modules/beneficiary/pages/Event/redux/types';
import { GiftState } from '../modules/beneficiary/pages/Gift/redux/types';
import { EventState } from '../modules/contributor/pages/Event/redux/types';
import { ResourceState } from '../modules/resources/redux/types';

interface AppState {
  user: any;
  event: {
    list: WishlistState;
    wallet: WalletState;
  };
  gifts: GiftState;
  resources: ResourceState;
  contributor: {
    event: EventState;
  };
  beneficiary: {
    link: string;
  };
}

export interface Category {
  name: string;
  _id: string;
}

export interface GiftType {
  quantity: number;
  paid: number;
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
  slug: string;
}

export default AppState;
