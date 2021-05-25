import API from '../../../../utils/api';
import { handleRequestError } from '../../../../utils/api/service';

export const getWishlistBySlug = async (slug: string) => {
  const url = `/list/slug/${slug}`;
  try {
    const response = await API.get(`${url}`);

    return [null, response.data.payload];
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getWishlistById = async (id: string) => {
  const url = '/list';

  try {
    const response = await API.get(`${url}/${id}`);

    return [null, response.data.payload];
  } catch (err) {
    return handleRequestError(err);
  }
};


export const getGift = async (id: string) => {
  const url = '/gift';

  try {
    const response = await API.get(`${url}/${id}`);

    return [null, response.data.payload];
  } catch (err) {
    return handleRequestError(err);
  }
};
