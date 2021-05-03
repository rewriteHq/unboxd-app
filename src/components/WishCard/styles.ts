import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const WishCardWrapper = styled.div`
  min-width: 366px;
  flex: 0 0 48%;
  border-radius: 18px;
  position: relative;
  margin-bottom: 14px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  .img {
    width: 100%;
    height: 100%;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
  }
  .wish-details {
    position: absolute;
    z-index: 9;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    h1 {
      flex: 2;
      font-size: 20px;
    }
    .wish-category {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-self: flex-end;
      .wish-amount {
        margin-right: 5px;
        width: 78px;
        height: 27px;
        background: ${Colors.green};
        border-radius: 8px;
        text-transform: uppercase;
        font-size: 11px;
      }
      .wish-icon {
        width: 29px;
        height: 27px;
        background: ${Colors.green};
        border-radius: 8px;
      }
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    min-width: 100%;
  }
`;
