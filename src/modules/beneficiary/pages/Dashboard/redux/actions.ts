import { SET_WISH_LIST, GET_WISH_LIST } from './types';

import API from '../../../../../utils/api';
import { Dispatch } from 'react';
import { WishList } from '../../../../../typings';

interface IDispatch {
  type: string;
  payload?: WishList[];
}

export const getUserWishList = () => (dispatch: Dispatch<IDispatch>) => {
  dispatch({
    type: GET_WISH_LIST,
  });

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
