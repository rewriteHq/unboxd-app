import API from '../../../../utils/api';
import { handleRequestError } from '../../../../utils/api/service';

export const getWishlistBySlug = async (slug: string) => {
  const url = '/list/slug1';
  try {
    const response = await API.get(url, {
      params: {
        slug,
      },
    });

    return [null, response.data.payload];
  } catch (err) {
    return handleRequestError(err);
  }
};
