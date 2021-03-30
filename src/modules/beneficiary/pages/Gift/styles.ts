import styled, { css } from 'styled-components';
import { BTN } from '../../../../components/Button/styles';
import Colors from '../../../../constants/Colors';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';

const imageStyle = css`
  height: 40vh;
  position: relative;
`;

export const ImageHolder = styled.div`
  ${imageStyle}
  background-color: ${Colors.grey};
`;

export const UploadButton = styled(BTN)<{ color?: string }>`
  background-color: ${({ color }) => (color ? color : 'transparent')};
  border: 1px solid ${Colors.black};
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: unset;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CoverImage = styled.img`
  ${imageStyle}
  width: 100%;
  object-fit: cover;
`;

export const Total = styled(SpaceBetween)`
  align-items: center;
  background-color: ${Colors.lightGrey};
  padding: 20px 20px 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const TotalAmount = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
`;
