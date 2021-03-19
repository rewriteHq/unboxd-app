import API from '../../../../utils/api';
import Notify from '../../../../utils/notify/notify';

type EventData = {
  title: string;
  categoryID: string;
  date: string;
  coverImage: string | File;
};

export const createEvent = async (data: EventData) => {
  try {
    const response = await API.post('/list', data);
    Notify.bottom(response.data.message);
    return [null, response.data.payload];
  } catch (err) {
    const message = err.response.data.message;
    Notify.bottom(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const getWishlist = async (id: string) => {
  try {
    const response = await API.get(`/list/${id}`);
    return [null, response.data.payload];
  } catch (err) {
    const message = err.response.data.message;
    Notify.bottom(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};
