import React from 'react';
import { Layout } from '../Layout';
import { Post } from '../Post';

import data from '../../mock/data.json';
import styled from 'styled-components';

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

interface IInitialPage {}
export const InitialPage = (props: IInitialPage) => {
  const posts = data.posts;
  return (
    <Layout>
      <PostList>
        {posts.slice(0,12).map((post) => (
          <Post />
        ))}
      </PostList>
    </Layout>
  );
};
