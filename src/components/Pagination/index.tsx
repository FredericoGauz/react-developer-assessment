import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 5rem;
  margin-top: 2rem;
`;
const Buttom = styled.button<{ current: boolean }>`
  font-weight: ${(props) => (props.current ? 'bold' : 'initial')};
  padding: 0.45em 0.85em;
  background-color: ${(props) =>
    props.current ? colors.lightAccent : 'transparent'};
  color: ${(props) => (props.current ? 'white' : colors.darkGray)};
  border: transparent;
  cursor: pointer;
`;
export interface IPaginationProps {
  current: number;
  size?: number;
  numberOfPages: number;
  total: number;
  onChange: (page: number) => void;
}
export const Pagination = (props: IPaginationProps) => {
  return (
    <Wrapper>
      {Array.from(Array(props.numberOfPages).keys()).map((number) => (
        <Buttom
          key={number}
          current={props.current === number + 1}
          onClick={() => props.onChange(number + 1)}
        >
          {number + 1}
        </Buttom>
      ))}
    </Wrapper>
  );
};
