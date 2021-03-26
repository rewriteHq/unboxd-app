import { GiftType } from '../../../../../typings';

export const ADD_GIFT = 'ADD_GIFT';

export type GiftDataType = {
  [key: string]: GiftType;
};

export interface GiftState {
  data: GiftDataType;
  error: null;
}

interface AddGift {
  type: typeof ADD_GIFT;
  payload: GiftType;
}

export type GiftActionTypes = AddGift;
