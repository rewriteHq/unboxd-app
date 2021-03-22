import { WishList } from '../../../../typings';

export type EventData = {
  title: string;
  categoryID: string;
  date: string;
  coverImage: string | File;
};

export interface EventFormProps {
  getCategories: () => void;
  getWishlist?: (id: string) => void;
  list?: WishList | null;
  type: 'create' | 'edit';
}

export interface EventParamsType {
  id: string;
}
