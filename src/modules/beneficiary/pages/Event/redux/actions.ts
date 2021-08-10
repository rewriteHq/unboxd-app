import { Dispatch } from 'redux';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import * as services from '../service';
import { SET_WISHLIST, SET_WISHLIST_LOADING } from './types';

export const getWishlist = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI, payload: true });

  const [err, response] = await services.getWishlist(id);

  if (err) {
    return;
  }

  dispatch({
    type: SET_WISHLIST,
    payload: response,
  });
};

export const getWishlistBySlug = (slug: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SET_WISHLIST_LOADING });

  const username = localStorage.getItem('username') as string;
  const [err, response] = await services.getWishlistBySlug(slug, username);

  if (err) {
    return;
  }

  dispatch({
    type: SET_WISHLIST,
    payload: response,
  });
};