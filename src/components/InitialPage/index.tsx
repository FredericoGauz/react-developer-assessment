import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Layout } from '../Layout';

import { PostList } from '../PostList';
import { IPost } from '../../types/post.interface';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const HeaderTitle = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  color: ${colors.blackGray};
  font-size: 4em;
  margin-top: 0;
`;

interface IInitialPage {
}
export const InitialPage = (props: IInitialPage) => {
  const [posts, setPosts] = useState<Array<IPost>>([])
  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      try {
        const response = await axios.get('api/posts');
        if(!response) return console.warn('Error fetching posts.', 'Empty response.');
        if(mounted) setPosts(response.data.posts);
      } catch(err) {
        return console.warn('Error fetching posts.', err);
      }
    }
    fetchPosts();
    return () => {
      mounted = false;
    }
  }, [])

  if(!posts) return <Layout><p>Loading...</p></Layout>
  return (
    <React.Fragment>
      <PureInitialPage posts={posts} />
    </React.Fragment>
  );
};
interface IPureInitialPage {
  posts: IPost[];
}
export const PureInitialPage = (props: IPureInitialPage) => {
  return (
    <Layout>
      <HeaderTitle>World News</HeaderTitle>
      <PostList posts={props.posts.slice(0, 12)} />
    </Layout>
  );
};
