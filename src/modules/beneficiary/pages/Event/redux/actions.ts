import { Dispatch } from 'redux';
import API from '../../../../../utils/api';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import { SET_CATEGORIES } from './types';
import * as services from '../service';

export const getCategories = () => (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI, payload: true });
  API.get('/category')
    .then((res) =>
      dispatch({
        type: SET_CATEGORIES,
        payload: res.data.payload,
      })
    )
    .catch((err) => console.log(err.response))
    .finally(() => dispatch({ type: LOADING_UI, payload: false }));
};

export const getWishlist = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI, payload: true });

  const [err, response] = await services.getWishlist(id);

  if (err) {
    return;
  }
};
