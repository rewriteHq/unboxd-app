import styled from 'styled-components';
import { BTN } from '../../../../components/Button/styles';

export const ImageHolder = styled(BTN)`
  height: 30vh;
`;

export const HeadlineInput = styled.input`
  border: none;
  padding: 1rem 0;
  width: 100%;
  font-weight: bold;
  font-size: 25px;

  &::placeholder {
    opacity: 0.5;
    font-weight: bold;
  }
`;
