/**
 * FOR GLOBAL APP TYPE DEFINITIONS
 */

import { Category } from '../modules/beneficiary/pages/Event/redux/types';

interface AppProps {}

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
}

export default AppProps;
