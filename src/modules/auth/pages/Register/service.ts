import { IRegisterState } from './types';
import * as API from '../../../../utils/api/service';

export const signup = (data: IRegisterState) => {
  return new Promise((resolve, reject) => {
    API.postReq(
      '/auth/signup',
      data,
      (res) => {
        console.log(res);
        resolve(res);
      },
      (err) => {
        console.log(err);
        reject(err);
      }
    );
  });
};
