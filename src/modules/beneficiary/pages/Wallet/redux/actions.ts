import { Dispatch } from 'redux';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import * as services from '../service';
import { SET_WALLET } from './types';

export const getUserWallet = () => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI });

  const [err, result] = await services.getWallet();

  if (err) {
    return err;
  }

  dispatch({ type: SET_WALLET, payload: result });
};
