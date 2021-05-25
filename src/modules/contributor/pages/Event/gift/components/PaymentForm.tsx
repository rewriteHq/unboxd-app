import { useCallback, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import PayWithFlutterwave from '../../../../../../commons/Payment/flutterwave';
import Button from '../../../../../../components/Button';
import PriceInput from '../../../../../../components/Input/price';
import { WishList } from '../../../../../../typings';
import Notify from '../../../../../../utils/notify/notify';
import { isEmail } from '../../../../../../utils/validate';
import { LOADING_UI } from '../../../../../auth/pages/Login/redux/types';
import { getPaymentReference } from '../services';
import { SuggestWrapper } from '../styles';
import ThankYouModal from './ThankYouModal';
import PrePaymentModal from './PrePayment';

export interface EventData extends WishList {
  giftId: string;
}

type ComponentProps = {
  price: number | string;
  eventData: EventData;
  setLoading: (payload: boolean) => void;
};

const PaymentForm = ({ price, eventData, setLoading }: ComponentProps) => {
  const [data, setData] = useState({
    amount: price,
    email: '',
    phone: '',
    name: '',
    anonymous: false,
  });
  const [reference, setReference] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [next, setNext] = useState<boolean>(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = e.target;
    if(e.target.name === "anonymous") {
      if(e.target.checked) {
        setData((prev) => ({...prev, anonymous: true}))
      }
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }, []);

  const changePrice = useCallback(({ value }: NumberFormatValues) => {
    if (+value > 500000) {
      return Notify.top('Kindly input an amount less than 500,000');
    }
    setData((prev) => ({ ...prev, amount: value }));
  }, []);

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNext(true);
  }
  
  const handleClose = () => setNext(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, email, anonymous } = data;
    const token = localStorage.getItem('token');

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
      givingType: token ? 'user' : (anonymous ? 'anonymous' : 'guest'),
      givingTo: eventData.userID,
    };

    setLoading(true);
    const [err, result] = await getPaymentReference(payload);
    setLoading(false);

    if (err) {
      return;
    }

    setReference(result.reference);
  };

  const toggleSuccessModal = useCallback(
    () => setSuccessModal((prev) => !prev),
    []
  );

  const paymentSuccess = useCallback(() => {
    setReference('');
    setSuccessModal(true);
  }, []);

  return (
    <>
      <SuggestWrapper>
        <p>State the amount you will be contributing</p>

        <form onSubmit={handleNext}>
          <PriceInput
            onChange={changePrice}
            name="amount"
            value={data.amount}
            label="Amount to pay"
          />
          <Button type="submit">Contribute</Button>
        </form>
      </SuggestWrapper>

      {next && <PrePaymentModal
        close={handleClose}
        change={handleChange}
        submit={handleSubmit}
        data={data}
      />}

      {reference && (
        <PayWithFlutterwave
          amount={+data.amount}
          email={data.email}
          event={eventData.title}
          reference={reference}
          success={paymentSuccess}
        />
      )}

      <ThankYouModal
        show={successModal}
        close={toggleSuccessModal}
        eventData={eventData}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setLoading: (payload: boolean) => dispatch({ type: LOADING_UI, payload }),
});

export default connect(null, mapDispatchToProps)(PaymentForm);
