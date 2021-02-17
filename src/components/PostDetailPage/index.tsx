import React, { useEffect, useState } from 'react';
import { Layout } from '../Layout';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { RelatedPosts } from '../RelatedPosts';
import { Author } from '../Author';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IPost } from '../../types/post.interface';

const Card = styled.article`
  padding-left: 0em;
  padding-right: 0em;

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
  font-size: 1.5em;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 3em;
  }
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
  width: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
const AuthorWrapper = styled.div`
  justify-content: center;
`;
export interface IPostDetailPageProps {}
export const PostDetailPage = (props: IPostDetailPageProps) => {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    let mounted = true;
    const getPost = async (id: string) => {
      try {
        const uri = `/api/posts/${id}`;
        const response = await axios.get(uri);
        if (!response) return setError('Error fetching post.');
        if (response.data.length <= 0) return setError('Post not found.');
        const post = response.data[0];
        if (mounted) setPost(post);
      } catch (err) {
        return console.warn('Error fetching post.', err);
      }
    };
    getPost(id);
    return () => {
      mounted = false;
    };
  }, [id]);

  //TODO Please remember that this is very primitive and would not be use on production
  if (!id) return <div>404</div>;
  if (!post) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const { title, summary, author, publishDate } = post;
  return (
    <Layout>
      <Card>
        <Title>{title}</Title>
        <Text>{summary}</Text>
        <AuthorWrapper>
          <Author author={author} date={publishDate} reverse />
        </AuthorWrapper>
      </Card>
      <RelatedPostsWrapper>
        <RelatedPosts />
      </RelatedPostsWrapper>
    </Layout>
  );
};
