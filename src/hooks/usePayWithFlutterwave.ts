import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useEffect, useRef } from 'react';

type PropsTypes = {
  reference: string;
  amount: number;
  email: string;
  event: string;
};

const usePayWithFlutterwave = ({
  reference,
  amount,
  email,
  event,
}: PropsTypes) => {
  const paymentInitiated = useRef(false);
  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_CLIENT || '',
    tx_ref: reference,
    amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      name: '',
      phonenumber: '',
    },
    customizations: {
      title: 'Unboxd',
      description: `Payment for ${event}`,
      logo: '',
    },
  };

  const handlePayment = useFlutterwave(config);

  useEffect(() => {
    if (!paymentInitiated.current) {
      handlePayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal();
        },
        onClose: () => {},
      });

      paymentInitiated.current = true;
    }
  }, [handlePayment]);
};

export default usePayWithFlutterwave;
