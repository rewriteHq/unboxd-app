import API from '../../../../utils/api';
import Notify from '../../../../utils/notify/notify';
import { DeleteParams } from './redux/types';

type GiftParams = {
  data: any;
  id: string;
};

export const addGift = async ({ data, id }: GiftParams) => {
  try {
    const response = await API.post(`/gift/${id}`, data);
    Notify.top(response.data.message);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    Notify.top(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const getGift = async (id: string) => {
  try {
    const response = await API.get(`/gift/${id}`);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    Notify.top(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const updateGift = async ({ id, data }: GiftParams) => {
  try {
    const response = await API.put(`/gift/${id}`, data);
    Notify.top(response.data.message);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    Notify.top(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const deleteGift = async ({ id, wishlistId }: DeleteParams) => {
  try {
    const response = await API.delete(`/gift/${wishlistId}/${id}`);
    Notify.top(response.data.message);
  } catch (err: any) {
    const message = err.response.data.message;
    Notify.top(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
}
