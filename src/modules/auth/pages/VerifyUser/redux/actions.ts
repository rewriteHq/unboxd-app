import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_USER,
  SEND_EMAIL,

} from './types';
import API from '../../../../../utils/api';
import Notify from '../../../../../utils/notify/notify';

export const sendEmail = (payload: any) => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  API.post('/auth/sendOtp', payload)
    .then((res) => {
      console.log(res);
      Notify.bottom('OTP sent to your email');
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SEND_EMAIL, payload })
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      Notify.bottom(err.response.data.message);
    });
};

export const verifyUser = (userData: any, history: any) => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  API.post('/auth/verifyOtp', userData)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      history.push('/dashboard'); //redirecting to index page after login success
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      Notify.bottom(err.response.data.message);
    });
};
