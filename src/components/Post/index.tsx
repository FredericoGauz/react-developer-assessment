import React from 'react';
import { prune } from 'voca';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IPost } from '../../types/post.interface';
import { Link } from '../Link';
import { friendlyDate } from '../../utils/utils';

const Card = styled.article`
  width: 300px;
  height: 250px;
  padding: 1em 1.2em;
  @media (min-width:768px) {
    padding: 2em 1.2em;
  }
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: slide-up 0.4s ease;
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
  font-size: 1.8em;
  line-height: 1.4em;

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
const Info = styled.div`
  margin-top: -0.6em;
  margin-bottom: 1em;
`;
const AuthorName = styled.small`
  font-weight: 600;
`;
export interface IPostProps extends IPost {}
export const Post = (props: IPostProps) => {
  const { id, title, summary, publishDate, author } = props;
  return (
    <Card>
      <Title>
        <Link to={`/posts/${id}`}>{prune(title, 30)}</Link>
      </Title>
      <Info>
        <AuthorName>{author.name} - </AuthorName>
        <small>{friendlyDate(publishDate)}</small>
      </Info>
      <Text>
        {prune(summary, 450)}
        {summary.length > 450 && (
          <span>
            <Link to={`/posts/${id}`}>...</Link>
          </span>
        )}
      </Text>
    </Card>
  );
};
