import React from 'react';
import { Layout } from '../Layout';

import data from '../../mock/data.json';
import { PostList } from '../PostList';
import { IPost } from '../../types/post.interface';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const HeaderTitle = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  color: ${colors.blackGray};
  font-size:4em;
`;

interface IInitialPage {}
export const InitialPage = (props: IInitialPage) => {
  const posts:IPost[] = data.posts;
  return (
    <Layout>
      <HeaderTitle>World News</HeaderTitle>
      <PostList posts={posts.slice(0,12)} />
    </Layout>
  );
};
