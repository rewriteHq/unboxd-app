/**
 * FOR GLOBAL APP TYPE DEFINITIONS
 */

interface AppProps {}

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
}

export default AppProps;
