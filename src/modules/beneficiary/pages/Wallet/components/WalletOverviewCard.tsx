import { WalletBalanceBig } from '../styles'
import {ReactComponent as RequestIcon} from "assets/img/icons/request.svg";
import { formatNumber } from 'utils/helpers/formatNumber';

interface IWalletOverviewCardProps {
  balance: number;

}

export const WalletOverviewCard = ({balance}: IWalletOverviewCardProps) => {
    return (
        <WalletBalanceBig>
        <div className="circle-1"/>
        <div className="circle-2"/>
        <div className="circle-3"/>
        <div className="left">
          <span>Wallet Balance</span>
          <p>NGN {formatNumber(balance)}</p>
        </div>

        <div className="right">
          <span>Request payout</span>
          <RequestIcon/>
        </div>
      </WalletBalanceBig>
    )
}
