import React from 'react';
import { PostList } from '../PostList';
import data from '../../mock/data.json';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.aside`
  margin-top: 1em;
  margin-bottom: 1em;
  width: 100%;

  @media (min-width: 768px) {
  margin-top: 2em;
  margin-bottom: 2em;
  }
`;

const CategoryTitle = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 500;
  color: ${colors.blackGray};
  font-size: 1.6em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;
export const RelatedPosts = () => {
  return (
    <Wrapper>
      <CategoryTitle>You Might Also Like</CategoryTitle>
      <PostList posts={data.posts.slice(0, 3)} carousel />
    </Wrapper>
  );
};
