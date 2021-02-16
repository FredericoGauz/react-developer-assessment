import React from 'react';
import { Layout } from '../Layout';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { RelatedPosts } from '../RelatedPosts';
import { post } from '../../mock/post';
import { Author } from '../Author';

const Card = styled.div`
  padding-left: 2em;
  padding-right: 2em;

  @media (min-width: 768px) {
    padding-left: 6em;
    padding-right: 6em;
    margin-top: 2em;
    margin-bottom: 2em;
  }
  @media (min-width: 1024px) {
    padding-left: 15em;
    padding-right: 15em;
  }
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  color: ${colors.blackGray};
  font-size: 3em;
`;

const Text = styled.p`
  font-family: 'Roboto', serif;
  font-weight: 400;
  line-height: 1.7em;
  text-align: justify;
  font-size: 0.9em;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
  color: ${colors.darkGray};
  margin-bottom: 2em;
`;

const RelatedPostsWrapper = styled.div`
  width: 80%;
`;
const AuthorWrapper = styled.div`
  justify-content: center;
`;
export interface IPostDetailPageProps {}
export const PostDetailPage = (props: IPostDetailPageProps) => {
  const { title, summary, author, publishDate } = post;
  return (
    <Layout>
      <Card>
        <Title>{title}</Title>
        <Text>{summary}</Text>
        <AuthorWrapper>
          <Author author={author} date={publishDate} reverse/>
        </AuthorWrapper>
      </Card>
      <RelatedPostsWrapper>
        <RelatedPosts />
      </RelatedPostsWrapper>
    </Layout>
  );
};
