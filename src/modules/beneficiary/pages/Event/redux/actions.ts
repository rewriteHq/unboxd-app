import { Dispatch } from 'redux';
import API from '../../../../../utils/api';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import { SET_CATEGORIES } from './types';

export const getCategories = () => (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI });
  API.get('/category')
    .then((res) =>
      dispatch({
        type: SET_CATEGORIES,
        payload: res.data.payload,
      })
    )
    .catch((err) => console.log(err.response));
};