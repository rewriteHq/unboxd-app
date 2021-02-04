import Styled from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const FooterWrapper = Styled.div`
    display: flex;

    .container {
        justify-content: center;
        padding: 10px 92px;

        .info {
            font-size: ${Sizes.small}px;
            line-height: ${Sizes.fourteen}px;
            font-weight: ${Sizes.normalWeight};
            text-align: center;
        }
    }
`;
