import styled, { css } from 'styled-components';
import { BTN } from '../../../../components/Button/styles';
import Colors from '../../../../constants/Colors';

const imageStyle = css`
  height: 40vh;
  position: relative;
`;

export const ImageHolder = styled.div`
  ${imageStyle}
  background-color: ${Colors.grey};
`;

export const UploadButton = styled(BTN)`
  background-color: transparent;
  border: 1px solid ${Colors.black};
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: unset;
`;

export const CoverImage = styled.img`
  ${imageStyle}
  width: 100%;
  object-fit: cover;
`;
