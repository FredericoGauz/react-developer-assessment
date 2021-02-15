import React from 'react';
import styled from 'styled-components';
import { IPost } from '../../types/post.interface';
import { Post } from '../Post';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

interface IPostList {
  posts: IPost[];
}

export const PostList = ({ posts }: IPostList) => {
  return (
    <List>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </List>
  );
};
