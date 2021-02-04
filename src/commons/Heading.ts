import Styled from 'styled-components';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

export const PageHeading = Styled.h1`
    color: ${Colors.black};
`;

export const PageHeadingSmall = Styled.h3`
    font-size: ${Sizes.twenty}px;
    color: ${Colors.black};
    padding: 10px 0
`;
