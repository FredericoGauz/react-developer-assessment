import React from 'react';
import styled from 'styled-components';
import { IPost } from '../../types/post.interface';
import { Post } from '../Post';

//TODO[magic-value] = '500px'
const List = styled.div<{ noWrap?: boolean }>`
  display: flex;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  justify-content: space-evenly;
`;
const ListCarousel = styled(List)`
  overflow-x: auto;
  flex-direction: column;
  width: 100%;
  max-height: 500px;
`
export interface IPostListProps {
  posts: IPost[];
  carousel?: boolean;
}

export const PostList = ({ posts, carousel }: IPostListProps) => {
  const DisplayList = carousel ? ListCarousel : List;
  return (
    <DisplayList>
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </DisplayList>
  );
};
