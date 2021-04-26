import styled from 'styled-components';
import { Flex } from '../../../../../../commons/UtilityStyles/Flex';
import Colors from '../../../../../../constants/Colors';
import { roundToThousands } from '../../../../../../utils/price';
import { SuggestWrapper } from '../styles';

type ComponentProps = {
  price: number;
  selectSuggestion: (price: number | '') => void;
};

const PillWrapper = styled(Flex)`
  flex-wrap: wrap;
`;

const PricePill = styled.button<{ theme?: string }>`
  background: ${Colors.darkNavy};
  border-radius: 18px;
  padding: 1rem 1.5rem;
  margin-bottom: 0.8rem;
  white-space: nowrap;
  color: ${Colors.white};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const PriceSuggest = ({ price, selectSuggestion }: ComponentProps) => {
  const roundedHalfPrice = roundToThousands(price / 2);

  return (
    <SuggestWrapper>
      <p>Choose an amount to contribute</p>

      <PillWrapper>
        <PricePill onClick={() => selectSuggestion(roundedHalfPrice)}>
          ₦ {roundedHalfPrice.toLocaleString()}
        </PricePill>
        <PricePill onClick={() => selectSuggestion(price)}>
          ₦ {price.toLocaleString()}
        </PricePill>
        <PricePill theme={Colors.blue} onClick={() => selectSuggestion('')}>
          Others
        </PricePill>
      </PillWrapper>
    </SuggestWrapper>
  );
};

export default PriceSuggest;
