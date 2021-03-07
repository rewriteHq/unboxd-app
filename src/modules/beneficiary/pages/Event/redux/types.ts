//event reducer types
export const SET_CATEGORIES = 'SET_CATEGORIES';

export interface Category {
  name: string;
  _id: string;
}

interface SetCategories {
  type: typeof SET_CATEGORIES;
  payload: Category[];
}

export interface InititalState {
  data: Category[];
  error: null;
}

export type EventActionTypes = SetCategories;
