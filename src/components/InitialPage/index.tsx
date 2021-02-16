import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../Layout';

import { PostList } from '../PostList';
import { IPost } from '../../types/post.interface';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { ICategory } from '../../types/category.interface';
import { PostFilters } from '../PostFilters';

const HeaderTitle = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  color: ${colors.blackGray};
  font-size: 4em;
  margin-top: 0;
`;

interface IInitialPage {}
export const InitialPage = (props: IInitialPage) => {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [filters, setFilters] = useState<Array<ICategory>>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      try {
        const uri = `api/posts/?page=${page}${filters.length > 0 ? '&filters=' + filters.map(f => f.name).join(',') : ''}`;
        const response = await axios.get(uri);
        if (!response)
          return console.warn('Error fetching posts.', 'Empty response.');
        if (mounted) setPosts(response.data);
      } catch (err) {
        return console.warn('Error fetching posts.', err);
      }
    };
    fetchPosts();
    return () => {
      mounted = false;
    };
  }, [filters, page]);

  if (!posts)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  return (
    <React.Fragment>
      <PureInitialPage posts={posts} filters={filters} setFilters={setFilters} />
    </React.Fragment>
  );
};
interface IPureInitialPage {
  posts: IPost[];
  setFilters: (filters: ICategory[]) => void;
  filters: ICategory[];
}
export const PureInitialPage = (props: IPureInitialPage) => {
  return (
    <Layout>
      <HeaderTitle>World News</HeaderTitle>
      <PostFilters filters={props.filters} setFilters={props.setFilters} />
      <p>Total Posts: {props.posts.length}</p>
      <PostList posts={props.posts.slice(0, 12)} />
    </Layout>
  );
};

