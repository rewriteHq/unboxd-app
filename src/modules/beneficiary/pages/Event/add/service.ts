import API from '../../../../../utils/api';
import Notify from '../../../../../utils/notify/notify';

export const getWishlist = async (id: string) => {
  try {
    const response = await API.get(`/list/${id}`);
    return [null, response.data.payload];
  } catch (err:any) {
    const message = err.response.data.message;
    Notify.bottom(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};
