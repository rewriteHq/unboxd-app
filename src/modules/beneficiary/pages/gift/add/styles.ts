import styled from 'styled-components';
import { BTN } from '../../../../../components/Button/styles';
import Colors from '../../../../../constants/Colors';

export const ImageHolder = styled.div`
  height: 40vh;
  position: relative;
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
