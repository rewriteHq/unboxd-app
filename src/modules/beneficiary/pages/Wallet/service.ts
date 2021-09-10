import API from '../../../../utils/api';
import { handleRequestError } from '../../../../utils/api/service';

export const getWallet = async () => {
  try {
    const response = await API.get('/wallet/user');
    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getBanks = async () => {
  try {
    const response = await API.get('/bank/name');
    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
}
