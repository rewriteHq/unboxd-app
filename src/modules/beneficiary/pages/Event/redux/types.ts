//event reducer types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';

export interface Category {
  name: string;
  _id: string;
}

interface CategoryGroup {
  [key: string]: Category;
}

interface SetCategories {
  type: typeof SET_CATEGORIES;
  payload: Category[];
}

interface AddCategory {
  type: typeof ADD_CATEGORY;
  payload: Category;
}

export interface InititalState {
  categories: Category[];
  categoryGroup: CategoryGroup;
}

export type EventActionTypes = SetCategories | AddCategory;
