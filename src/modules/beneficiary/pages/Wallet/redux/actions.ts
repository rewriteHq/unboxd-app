import { Dispatch } from 'redux';
import * as services from '../service';
import { SET_BANKS, SET_LOADING, SET_WALLET } from './types';

export const getUserWallet = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING });

  const [err, result] = await services.getWallet();

  if (err) {
    return err;
  }

  dispatch({ type: SET_WALLET, payload: result });
};

export const getBanks = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING });

  const [err, result] = await services.getBanks();

  if (err) {
    return err;
  }

  dispatch({ type: SET_BANKS, payload: result });
};