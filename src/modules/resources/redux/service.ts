import API from '../../../utils/api';
import Notify from '../../../utils/notify/notify';

export const getCategories = async () => {
  try {
    const result = await API.get('/category');

    return [null, result.data.payload];
  } catch (err) {
    const message = err.response.data.message;
    Notify.bottom(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};