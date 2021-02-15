import React from 'react';
import { prune } from 'voca';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IPost } from '../../types/post.interface';
import { Link } from '../Link';

const Card = styled.div`
  width: 300px;
  height: 250px;
  padding: 15px 10px;
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  color: ${colors.blackGray};
  transition: border ease-in-out 0.3s;
  border-bottom: 3px solid transparent;
  text-transform: capitalize;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${colors.accent};
  }
`;

const Text = styled.summary`
  font-family: 'Roboto', serif;
  font-weight: 300;
  line-height: 1.7em;
  text-align: justify;
  font-size: small;
  color: ${colors.darkGray};
`;

export interface IPostProps extends IPost {
}
export const Post = (props:IPostProps) => {
  const {title, summary} = props;
  return (
    <Card>
      <Title>
        <Link to="/post">{prune(title, 30)}</Link>
      </Title>
      <Text>
        {prune(summary, 450)}
        {summary.length > 450 && <span>
          <Link to="/post">...</Link>
        </span>}
      </Text>
    </Card>
  );
};
