import DashboardLayout from 'commons/DashboardLayout';
import { WalletContainer, FormContainer, InputGroup } from './styles';
import { BTN } from 'components/Button/styles';

const WalletPayout = () => {
  const _handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <DashboardLayout hideWalletSection>
      <WalletContainer>
        <header className="breadCrumb">
          Wallet <span>/ Request payout</span>
        </header>
        <div></div>
        <FormContainer>
          <form onSubmit={_handleSubmit}>
            <h3>How much do you want to request?</h3>
            <InputGroup>
            <span>Amount</span>
            <input placeholder="0.0" type="number"/>
            </InputGroup>
            <p className="walletBalance">Wallet Balance NGN 150,000.00</p>
            <BTN>Request Payout</BTN>
          </form>
        </FormContainer>
      </WalletContainer>
    </DashboardLayout>
  );
};

export default WalletPayout;
