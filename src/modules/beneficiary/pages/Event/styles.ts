import styled from 'styled-components';
import { BTN } from '../../../../components/Button/styles';

export const ImageHolder = styled(BTN)`
  height: 30vh;
`;

export const CoverImage = styled.img`
  height: 30vh;
  width: 100%;
  object-fit: cover;
`;

export const HeadlineInput = styled.textarea`
  border: none;
  padding: 1rem 0;
  width: 100%;
  font-weight: bold;
  font-size: 20px;

  &::placeholder {
    opacity: 0.5;
    font-weight: bold;
  }
`;
