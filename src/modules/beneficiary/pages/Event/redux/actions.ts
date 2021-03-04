import { Dispatch } from 'redux';
import API from '../../../../../utils/api';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import { SET_CATEGORIES, ADD_CATEGORY } from './types';

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

export const getCategory = ({ id }: { id: string }) => (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI });

  API.get(`/category/${id}`)
    .then((res) =>
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data.payload,
      })
    )
    .catch((err) => console.log(err.response));
};
