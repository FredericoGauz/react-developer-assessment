import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IAuthor } from '../../types/author.interface';
import { IPost } from '../../types/post.interface';

const dateFormatter = new Intl.DateTimeFormat([], {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
});


const Wrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
`;

const AvatarWrapper = styled.div`
  width: 40px;
  margin-right: 1em;
  margin-left: 1em;
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
  margin-top: 2px;
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
  const displayDate = new Date(Date.parse(date));
  return (
    <Wrapper reverse={reverse}>
      <AvatarWrapper>
        <Avatar alt="avatar of author post" src={author.avatar} />
      </AvatarWrapper>
      <Info>
        <Name>{author.name}</Name>
        <DisplayDate>{dateFormatter.format(displayDate)}</DisplayDate>
      </Info>
    </Wrapper>
  );
};
