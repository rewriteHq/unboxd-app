import { Dispatch } from 'redux';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import * as services from '../service';
import { SET_WISHLIST } from './types';

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
