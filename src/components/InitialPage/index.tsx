import React from 'react';
import { Layout } from '../Layout';
import { Post } from '../Post';

interface IInitialPage {}
export const InitialPage = (props: IInitialPage) => {
  return (
    <Layout>
        <Post />
    </Layout>
  );
};
