import styled, { css } from 'styled-components';
import { BTN } from '../../../../components/Button/styles';
import Colors from '../../../../constants/Colors';

export const ImageHolder = styled(BTN)`
  height: 30vh;
`;

export const CoverImage = styled.img`
  height: 30vh;
  width: 100%;
  object-fit: cover;
`;

const headlineFont = css`
  font-weight: bold;
  font-size: 25px;
`;

export const HeadlineInput = styled.textarea`
  border: none;
  padding: 1rem 0;
  width: 100%;
  ${headlineFont}

  &::placeholder {
    opacity: 0.5;
    font-weight: bold;
  }
`;

export const HeadlineText = styled.div`
  padding: 1rem 0 1.5rem;
  border-bottom: 1px solid ${Colors.lightGrey};

  h2 {
    ${headlineFont};
    margin-bottom: 0.5rem;
  }
`;
