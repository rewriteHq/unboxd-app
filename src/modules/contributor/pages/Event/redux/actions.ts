import { Dispatch } from 'redux';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import * as services from '../services';
import { SET_WISHLIST } from './types';

export const getWishlistBySlug = (slug: string) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: LOADING_UI, payload: true });

  const [err, response] = await services.getWishlistBySlug(slug);
  if (err) {
    return err;
  }

  dispatch({
    type: SET_WISHLIST,
    payload: response,
  });
};

export const getWishlistById = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI, payload: true });

  const [err, response] = await services.getWishlistById(id);
  if (err) {
    return err;
  }

  dispatch({
    type: SET_WISHLIST,
    payload: response,
  });
};
