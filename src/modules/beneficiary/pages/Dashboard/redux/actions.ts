import {
  SET_WISH_LIST,
  SET_LOADING,
  WishListDataTypes,
} from './types';
import API from '../../../../../utils/api';
import { Dispatch } from 'react';

export const getUserWishList = () => (dispatch: Dispatch<WishListDataTypes>) => {
  dispatch({ type: SET_LOADING, payload: true })
  API.get('/list/user')
    .then((res) => {
      dispatch({
        type: SET_WISH_LIST,
        payload: res.data.payload,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
