import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Link } from '../Link';

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  min-width: 100vw;
`;

const Header = styled.header`
  padding: 1em 2em;
  height: 10vh;
`;

const Logo = styled.p`
  display: inline;
  font-family: 'Alegreya';
  font-weight: 900;
  color: ${colors.blackGray};
`;

const Footer = styled.footer`
  padding: 1em 2em;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
`;

const InnerDiv = styled.div<{ verticalCenter?: boolean; noPadding?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => (props.verticalCenter ? 'center' : 'start')};
  padding: ${(props) => (props.noPadding ? 0 : '10px 30px')};
`;

export interface ILayoutProps {
  children?: React.ReactNode | React.ReactNodeArray;
  verticalCenter?: boolean;
  noPadding?: boolean;
}
export const Layout = ({ children, verticalCenter, noPadding }: ILayoutProps) => {
  return (
    <OuterDiv>
      <Header>
        <Logo>
          <Link to="/">The Lorem</Link>
        </Logo>
      </Header>
      <InnerDiv verticalCenter={verticalCenter} noPadding={noPadding}>
        {children}
      </InnerDiv>
      <Footer>
        <p>
          BY <Logo>Fred</Logo>
        </p>
      </Footer>
    </OuterDiv>
  );
};
