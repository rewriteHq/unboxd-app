import API from '../../../../utils/api';
import Notify from '../../../../utils/notify/notify';

export const createOrEditEvent = async (
  data: any,
  type: 'create' | 'edit',
  id: string
) => {
  const method = type === 'create' ? 'post' : 'put';
  const url = type === 'edit' && id ? `/list/${id}` : '/list';

  try {
    const response = await API[method](url, data);
    Notify.top(response.data.message);
    return [null, response.data.payload];
  } catch (err:any) {
    const message = err.response.data.message;
    Notify.top(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const getWishlist = async (id: string) => {
  try {
    const response = await API.get(`/list/${id}`);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    Notify.top(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const getWishlistBySlug = async (slug: string, username: string) => {
  try {
    const response = await API.get(`/list/${username}/${slug}`);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    Notify.top(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
}
