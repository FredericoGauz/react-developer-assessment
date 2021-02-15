import React from 'react';
import { Layout } from '../Layout';

import data from '../../mock/data.json';
import { PostList } from '../PostList';
import { IPost } from '../../types/post.interface';


interface IInitialPage {}
export const InitialPage = (props: IInitialPage) => {
  const posts:IPost[] = data.posts;
  return (
    <Layout>
      <PostList posts={posts.slice(0,12)} />
    </Layout>
  );
};
