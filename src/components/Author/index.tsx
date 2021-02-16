import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IAuthor } from '../../types/author.interface';
import { IPost } from '../../types/post.interface';
import { friendlyDate } from '../../utils/utils';




const Wrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: row;
  }
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  margin-top: 1em;
  margin-bottom: 1em;
`;

const AvatarWrapper = styled.div<{ reverse?: boolean }>`
  width: 40px;
  margin-right: ${(props) => (props.reverse ? '0em' : '1em')};
  margin-left: ${(props) => (props.reverse ? '1em' : '0em')};
  @media (max-width: 640px) {
    margin-right: 1em;
    margin-left: 0em;
  }
  display: flex;
  align-items: center;
`;
const Info = styled.div`
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: ${colors.darkGray};
`;

const DisplayDate = styled.div`
  font-size: 0.8em;
  margin-top: 0.1em;
`;

export interface IAuthorProps {
  author: IAuthor;
  date: IPost['publishDate'];
  reverse?: boolean;
}
const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const Author = ({ author, date, reverse }: IAuthorProps) => {
  
  return (
    <Wrapper reverse={reverse}>
      <AvatarWrapper reverse={reverse}>
        <Avatar alt="avatar of author post" src={author.avatar} />
      </AvatarWrapper>
      <Info>
        <Name>{author.name}</Name>
        <DisplayDate>{friendlyDate(date)}</DisplayDate>
      </Info>
    </Wrapper>
  );
};
