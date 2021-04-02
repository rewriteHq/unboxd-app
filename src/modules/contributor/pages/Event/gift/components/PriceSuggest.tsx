import styled, { css } from 'styled-components';
import { Flex } from '../../../../../../commons/UtilityStyles/Flex';
import Colors from '../../../../../../constants/Colors';
import { roundToThousands } from '../../../../../../utils/price';
import { SuggestWrapper } from '../styles';

type ComponentProps = {
  price: number;
  selectSuggestion: (price: number | '') => void;
};

const pillTheme = css<{ theme: string }>`
  color: ${(props) => props.theme};
  border: 1px solid ${(props) => props.theme};
`;

const PillWrapper = styled(Flex)`
  flex-wrap: wrap;
`;

const PricePill = styled.button<{ theme?: string }>`
  background: transparent;
  border-radius: 30px;
  border: 1px solid ${Colors.black};
  padding: 1rem 1.5rem;
  margin-bottom: 0.8rem;
  white-space: nowrap;
  ${(props) => props.theme && pillTheme}

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const PriceSuggest = ({ price, selectSuggestion }: ComponentProps) => {
  const roundedHalfPrice = roundToThousands(price / 2);
  const roundedOneThird = roundToThousands(price / 3);

  return (
    <SuggestWrapper>
      <p>Choose an amount to contribute</p>

      <PillWrapper>
        <PricePill onClick={() => selectSuggestion(roundedOneThird)}>
          ₦ {roundedOneThird.toLocaleString()}
        </PricePill>
        <PricePill onClick={() => selectSuggestion(roundedHalfPrice)}>
          ₦ {roundedHalfPrice.toLocaleString()}
        </PricePill>
        <PricePill onClick={() => selectSuggestion(price)}>
          ₦ {price.toLocaleString()}
        </PricePill>
        <PricePill theme={Colors.blue} onClick={() => selectSuggestion('')}>
          I have an amount in mind
        </PricePill>
      </PillWrapper>
    </SuggestWrapper>
  );
};

export default PriceSuggest;
