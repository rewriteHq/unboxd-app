import Styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Card = Styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.black};
  border: 0.5px solid ${Colors.tintGrey};
  border-radius: 5px;
  overflow: hidden;

  .img-holder {
    width: 100%;
    height: 166px;
    overflow: hidden;
    position: relative;
    top: -1px;

    img {
      width: 100%;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .name {
      font-size: 14px;
      font-weight: 100;
      padding-bottom: 0.25rem;
    }

    .price {
      font-size: 16px;
    }

    .progress {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 1rem;

      .amount-raised {
        font-size: 12px;
        font-weight: 300;
      }

      .progress-circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${Colors.tintOrange};
      }
    }
  }
`;