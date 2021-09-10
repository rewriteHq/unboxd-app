import { useEffect, useState } from 'react';
import DashboardLayout from 'commons/DashboardLayout';
import {
  WalletContainer,
  FormContainer,
  InputGroup,
  GoBack,
  ChooseBankList,
  ListItem,
} from './styles';
import { BTN } from 'components/Button/styles';
import PriceInput from 'components/Input/price';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStoreState } from 'store/types';
import { getBanks } from './redux/actions';
import { transformBanksSelect } from 'utils/helpers/transformBanksSelect';
import Select from 'components/Select';
import { formatNumber } from 'utils/helpers/formatNumber';

const data = [
  {
    _id: '60f19e2cf5551f84bc8ed519',
    userId: '60dc2d7036d4ce32a9a1d84d',
    bankCode: '044',
    bankName: 'GTBank',
    accountNumber: '0690000040',
    accountName: 'Alexis Sanchez',
  },
  {
    _id: '60f14dc497d83864234224c1',
    userId: '60dc2d7036d4ce32a9a1d84d',
    bankCode: '044',
    bankName: 'GTBank',
    accountNumber: '0690000040',
    accountName: 'Alexis Sanchez',
  },
];

interface BankAccountInterface {
  value: string;
  text: string;
}

const WalletPayout = () => {
  const dispatch = useDispatch();

  const {
    data: { balance }
  } = useSelector((state: GlobalStoreState) => state.wallet);
  const { banks } = useSelector((state: GlobalStoreState) => state.wallet);

  useEffect(() => {
    dispatch(getBanks());
  }, [dispatch]);

  const [step, setStep] = useState<number>(1);
  const [banksArray, setBanksArray] = useState<BankAccountInterface[]>([]);

  const _handleSubmit = (event: React.SyntheticEvent, step: number) => {
    event.preventDefault();
    console.log(step);
  };

  const chooseBank = (id: string) => {
    console.log(id);
    setStep(2);
  };

  const handleGoBack = () => {
    if (step === 9) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  const addAccount = () => {
    const data = transformBanksSelect(banks.data);
    setBanksArray(data);
    setStep(9);
    console.log('bank Array', banks);
  };

  const handleBankChange = () => {};

  const changePrice = () => {
    console.log('changing price');
  };

  return (
    <DashboardLayout hideWalletSection>
      <WalletContainer>
        <header className="breadCrumb">
          {step >= 2 && <GoBack onClick={handleGoBack}>{'<'}</GoBack>} Wallet{' '}
          <span>/ Request payout</span>
        </header>
        <FormContainer>
          {step === 1 && (
            <ChooseBankList>
              <h2>Which bank do you want to send the money to?</h2>
              <h3>Recent Accounts</h3>
              <ul>
                {data.map((item) => (
                  <ListItem onClick={() => chooseBank(item._id)}>
                    <span className="icon">
                      {item.bankName.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="account">
                      <p>{item.accountName}</p>
                      <p>{item.accountNumber}</p>
                      <p>{item.bankName}</p>
                    </div>
                  </ListItem>
                ))}
              </ul>
              <BTN onClick={addAccount}>Add An Account</BTN>
            </ChooseBankList>
          )}
          <form onSubmit={(event) => _handleSubmit(event, step)}>
            {step === 2 && (
              <>
                <h3>How much do you want to withdraw?</h3>
                <PriceInput label="Amount" onChange={changePrice} />
                <p className="walletBalance">Wallet Balance NGN {formatNumber(balance)}</p>
              </>
            )}
            {step === 3 && (
              <>
                <h3>Enter Otp</h3>
                <InputGroup>
                  <span>OTP</span>
                  <input placeholder="0.0" type="number" />
                </InputGroup>
                <p className="walletBalance">Wallet Balance NGN 150,000.00</p>
              </>
            )}
            {step === 9 && (
              <>
                <h3>Add an Account</h3>
                <Select
                  id="banks"
                  items={banksArray}
                  label="Select Bank"
                  handleChange={handleBankChange}
                  required
                />
              </>
            )}
            {(step === 2 || step === 3 || step === 9) && (
              <BTN>
                {step === 2
                  ? 'Request Payout'
                  : step === 3
                  ? 'Verify'
                  : 'Add Account'}
              </BTN>
            )}
          </form>
        </FormContainer>
      </WalletContainer>
    </DashboardLayout>
  );
};

export default WalletPayout;
