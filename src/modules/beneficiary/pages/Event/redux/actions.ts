import { Dispatch } from 'redux';
import API from '../../../../../utils/api';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import { SET_CATEGORIES } from './types';

export const getCategories = () => (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI });
  API.post('/category')
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response));
};
