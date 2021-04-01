import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useEffect, useRef } from 'react';
import { verifyPayment } from '../../modules/contributor/pages/Event/gift/services';
import Notify from '../../utils/notify/notify';

type PropsTypes = {
  reference: string;
  amount: number;
  email: string;
  event: string;
};

const PayWithFlutterwave = ({
  reference,
  amount,
  email,
  event,
}: PropsTypes) => {
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

  console.log(config.public_key);

  const handlePayment = useFlutterwave(config);

  useEffect(() => {
    handlePayment({
      callback: async (response) => {
        const { status, transaction_id, tx_ref } = response;
        if (status === 'successful') {
          const [err, result] = await verifyPayment({
            trxId: transaction_id,
            initialRef: tx_ref,
          });

          closePaymentModal();
          if (err) {
            Notify.top('Error!');
          }
          console.log(result);
        }
      },
      onClose: () => {},
    });
  }, [handlePayment]);

  return null;
};

export default PayWithFlutterwave;
