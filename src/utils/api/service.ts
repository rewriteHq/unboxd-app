import { AxiosError } from 'axios';
import API from '.';
import Notify from '../notify/notify';

type ResponseActionType = (res: any) => unknown;

const apiErrorHandler = (err: AxiosError) => {
  const { response } = err;

  if (typeof response !== 'undefined') {
    const statusCode = response.status;

    const data = {
      error: null,
      statusCode,
    };

    if (statusCode === 422) {
      //handle validation errors
    } else if (statusCode === 401) {
      //handle unauthorized errors
    } else if (statusCode === 404) {
      //handle not found errors
    } else if (statusCode === 50) {
      //handle server errors
    } else {
      data.error = response.data.error
        ? response.data.error.message
        : response.statusText;
    }

    return data;
  }
};

export const postReq = (
  url: string,
  params: any,
  success: ResponseActionType,
  failed: ResponseActionType
) =>
  API.post(url, params)
    .then((res) => success(res.data))
    .catch((err) => {
      const error = apiErrorHandler(err);
      failed(error);
    });

/**
 * TODO:
 *  Get Request
 *  Put Request
 *  Delete Request
 */

export const handleRequestError = (err: AxiosError) => {
  const message = err.response && err.response.data.message;
  Notify.bottom(message ? message : 'Something happened. Kindly try again');
  return [err.response];
};
