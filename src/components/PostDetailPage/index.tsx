import React from 'react';
import { Layout } from '../Layout';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { RelatedPosts } from '../RelatedPosts';

const Card = styled.div`
  padding-left: 15em;
  padding-right: 15em;
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  color: ${colors.blackGray};
  font-size:3em;
`;

const Text = styled.p`
  font-family: 'Roboto', serif;
  font-weight: 400;
  line-height: 1.7em;
  text-align: justify;
  font-size: 1.2em;
  color: ${colors.darkGray};
`;
interface IPostDetailPage {}
export const PostDetailPage = (props: IPostDetailPage) => {
  return (
    <Layout>
      <Card>
        <Title>Main Title</Title>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </Card>
      <RelatedPosts />
    </Layout>
  );
};
