import { TabItemContainer } from '../styles';
import dayjs from 'dayjs';
import { formatNumber } from 'utils/helpers/formatNumber';
import isWithinInterval from 'date-fns/fp/isWithinInterval';
import { ReactComponent as RequestIcon } from 'assets/img/icons/request.svg';
import { ReactComponent as ReceivedIcon } from 'assets/img/icons/received.svg';

interface ITabItemProps {
  source?: string;
  amount: number;
  date: Date | string;
  giftTitle: string;
  isWithDrawal?: boolean;
}

export const TabItem = ({
  source,
  amount,
  date,
  giftTitle,
  isWithDrawal,
}: ITabItemProps) => {
  return (
    <TabItemContainer>
      <div className="left">
        {isWithDrawal ? <RequestIcon /> : <ReceivedIcon />}
        <div>
          <p>
            {isWithDrawal ? 'Requested' : 'Received'} <span>from</span> {source}
          </p>
          <span>
            {isWithDrawal
              ? dayjs(date).format('MMM D, YYYY. hh:mm a')
              : `for ${giftTitle}`}
          </span>
        </div>
      </div>
      <div className="right">
        <p>N{formatNumber(amount || 0, 0)}</p>
        <span>{!isWithDrawal && dayjs(date).format('MMM D')}</span>
      </div>
    </TabItemContainer>
  );
};
