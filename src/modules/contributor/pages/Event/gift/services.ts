import API from '../../../../../utils/api';
import { handleRequestError } from '../../../../../utils/api/service';

interface RequestData {
  listId: string;
  giftId: string;
  givingType: string;
  givingTo: string;
  amount: number;
  email: string;
}

interface VerifyTypes {
  initialRef: string;
  trxId: number;
}

export const getPaymentReference = async (payload: RequestData) => {
  const url = '/giving';

  try {
    const response = await API.post(url, payload);

    return [null, response.data.payload];
  } catch (err) {
    return handleRequestError(err);
  }
};

export const verifyPayment = async (payload: VerifyTypes) => {
  const url = '/giving';

  try {
    const response = await API.put(url, payload);

    return [null, response.data.payload];
  } catch (err) {
    return handleRequestError(err);
  }
};