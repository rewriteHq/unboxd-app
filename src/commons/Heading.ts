import Styled from 'styled-components';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

export const PageHeadingXl = Styled.h1`
    color: ${Colors.black};
    font-weight: 900;
    font-size: 45px;
`;

export const PageHeading = Styled.h1`
    color: ${Colors.black};

    &.centered {
        text-align: center;
    }
`;

export const PageHeadingSmall = Styled.h3`
    font-size: ${Sizes.twenty}px;
    color: ${Colors.black};
    padding: 10px 0
`;
