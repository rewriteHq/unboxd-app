import { Dispatch } from 'redux';
import { LOADING_UI } from '../../auth/pages/Login/redux/types';
import { SET_CATEGORIES } from './types';
import * as service from './service';

export const getCategories = () => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI, payload: true });
  const [err, response] = await service.getCategories();

  if (err) {
    return err;
  }

  dispatch({ type: SET_CATEGORIES, payload: response });
};
