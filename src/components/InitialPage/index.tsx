import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../Layout';

import { PostList } from '../PostList';
import { IPost } from '../../types/post.interface';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { ICategory } from '../../types/category.interface';
import { PostFilters } from '../PostFilters';
import { Pagination } from '../Pagination';
import { IGetPostsResponse } from '../../mock';

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
  const [totalResults, setTotalResults] = useState<number | null>(null);
  const [numberOfPages, setNumberOfPages] = useState<number | null>(null);
  const [resultsPerPage, setResultsPerPage] = useState(12);
  
  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      try {
        const uri = `api/posts/?page=${page}&size=${resultsPerPage}${
          filters.length > 0
            ? '&filters=' + filters.map((f) => f.name).join(',')
            : ''
        }`;
        const response = await axios.get(uri);
        if (!response)
          return console.warn('Error fetching posts.', 'Empty response.');

        if (!mounted) return;
        const data: IGetPostsResponse = response.data;
        setPosts(data.posts);
        setTotalResults(data.totalResults);
        setNumberOfPages(data.totalPages);
        setResultsPerPage(data.pageSize);

      } catch (err) {
        return console.warn('Error fetching posts.', err);
      }
    };
    fetchPosts();
    return () => {
      mounted = false;
    };
  }, [filters, page, resultsPerPage]);

  if (!posts)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  return (
    <React.Fragment>
      <PureInitialPage
        posts={posts}
        filters={filters}
        setFilters={setFilters}
        currentPage={page}
        pageSize={resultsPerPage}
        //the next should never be null because if we don't get the results we will be in loading state
        numberOfPages={numberOfPages || 0}
        totalResults={totalResults || 0}
        onPaginationChange={setPage}
      />
    </React.Fragment>
  );
};
interface IPureInitialPage {
  posts: IPost[];
  setFilters: (filters: ICategory[]) => void;
  filters: ICategory[];

  currentPage: number;
  pageSize?: number;
  numberOfPages: number;
  totalResults: number;
  onPaginationChange: (page: number) => void;
}
export const PureInitialPage = (props: IPureInitialPage) => {
  return (
    <Layout>
      <HeaderTitle>World News</HeaderTitle>
      <PostFilters filters={props.filters} setFilters={props.setFilters} />
      <PostList posts={props.posts.slice(0, 12)} />
      <Pagination
        current={props.currentPage}
        size={props.pageSize}
        total={props.totalResults}
        onChange={props.onPaginationChange}
        numberOfPages={props.numberOfPages}
      />
    </Layout>
  );
};
