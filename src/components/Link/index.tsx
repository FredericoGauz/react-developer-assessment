import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Link = styled(ReactRouterLink)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:active, &:visited {
        color:${colors.darkGray}
    }
`;
