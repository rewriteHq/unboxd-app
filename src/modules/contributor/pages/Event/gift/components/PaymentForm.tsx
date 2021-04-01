import { useCallback, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import Button from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';
import PriceInput from '../../../../../../components/Input/price';
import Notify from '../../../../../../utils/notify/notify';
import { isEmail } from '../../../../../../utils/validate';
import { SuggestWrapper } from '../styles';

type ComponentProps = {
  price: number | string;
};

const PaymentForm = ({ price }: ComponentProps) => {
  const [data, setData] = useState({
    amount: price,
    email: '',
  });

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, email } = data;

    if (!amount) {
      return Notify.top('Kindly input an amount to be paid');
    }

    if (!email || !isEmail(email)) {
      return Notify.top('Please enter a valid email address');
    }
  };

  return (
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
  );
};

export default PaymentForm;
