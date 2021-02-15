import React from 'react';
import styled from 'styled-components';
import { IPost } from '../../types/post.interface';
import { Post } from '../Post';

const List = styled.div<{ noWrap?: boolean }>`
  display: flex;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  justify-content: space-evenly;
`;

export interface IPostListProps {
  posts: IPost[];
}

export const PostList = ({ posts }: IPostListProps) => {
  return (
    <List>
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </List>
  );
};
