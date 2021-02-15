import React from 'react';
import styled from 'styled-components';

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
`;

const Footer = styled.footer`
  padding: 1em 2em;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
`;

const InnerDiv = styled.div<{ verticalCenter?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => (props.verticalCenter ? 'center' : 'start')};
`;

interface ILayout {
  children?: React.ReactNode | React.ReactNodeArray;
  verticalCenter?: boolean;
}
export const Layout = ({ children, verticalCenter }: ILayout) => {
  return (
    <OuterDiv>
      <Header>
        <Logo>The Lorem</Logo>
      </Header>
      <InnerDiv verticalCenter={verticalCenter}>{children}</InnerDiv>
      <Footer>
        <p>
          BY <Logo>Fred</Logo>
        </p>
      </Footer>
    </OuterDiv>
  );
};
