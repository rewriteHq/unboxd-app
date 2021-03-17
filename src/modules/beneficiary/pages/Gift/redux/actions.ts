import { Dispatch } from 'redux';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import { getGift } from '../service';
import { ADD_GIFT } from './types';

export const addGift = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI });

  const [err, gift] = await getGift(id);
  if (err) {
    return err;
  }

  dispatch({
    type: ADD_GIFT,
    payload: gift,
  });
};
