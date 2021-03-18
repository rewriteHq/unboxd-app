import { Category } from '../../../typings';

export const SET_CATEGORIES = 'SET_CATEGORIES';

export interface ResourceState {
  data: {
    categories: Category[];
  };
  error: null;
}

type SetCategories = {
  type: typeof SET_CATEGORIES;
  payload: Category[];
};

export type ResourceActionTypes = SetCategories;
