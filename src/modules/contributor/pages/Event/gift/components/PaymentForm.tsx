import { useCallback, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import PayWithFlutterwave from '../../../../../../commons/Payment/flutterwave';
import Button from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';
import PriceInput from '../../../../../../components/Input/price';
import { WishList } from '../../../../../../typings';
import Notify from '../../../../../../utils/notify/notify';
import { isEmail } from '../../../../../../utils/validate';
import { LOADING_UI } from '../../../../../auth/pages/Login/redux/types';
import { getPaymentReference } from '../services';
import { SuggestWrapper } from '../styles';

interface DataType extends WishList {
  giftId: string;
}

type ComponentProps = {
  price: number | string;
  eventData: DataType;
  setLoading: (payload: boolean) => void;
};

const PaymentForm = ({ price, eventData, setLoading }: ComponentProps) => {
  const [data, setData] = useState({
    amount: price,
    email: '',
  });
  const [reference, setReference] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const changePrice = useCallback(({ value }: NumberFormatValues) => {
    setData((prev) => ({ ...prev, amount: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, email } = data;

    if (!amount) {
      return Notify.top('Kindly input an amount to be paid');
    }

    if (!email || !isEmail(email)) {
      return Notify.top('Please enter a valid email address');
    }

    const payload = {
      amount: +amount,
      email,
      listId: eventData._id,
      giftId: eventData.giftId,
      givingType: 'guest',
      givingTo: eventData.userID,
    };

    setLoading(true);
    const [err, result] = await getPaymentReference(payload);
    setLoading(false);

    if (err) {
      return;
    }
    console.log(result);

    setReference(result.reference);
  };

  return (
    <>
      <SuggestWrapper>
        <p>State the amount you will be contributing</p>

        <form onSubmit={handleSubmit}>
          <PriceInput
            onChange={changePrice}
            name="amount"
            value={data.amount}
            label="Amount to pay"
          />
          <Input
            onChange={handleChange}
            name="email"
            value={data.email}
            label="Email address"
            type="email"
            required
          />

          <Button type="submit">Contribute</Button>
        </form>
      </SuggestWrapper>

      {reference && (
        <PayWithFlutterwave
          amount={+data.amount}
          email={data.email}
          event={eventData.title}
          reference={reference}
        />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setLoading: (payload: boolean) => dispatch({ type: LOADING_UI, payload }),
});

export default connect(null, mapDispatchToProps)(PaymentForm);
