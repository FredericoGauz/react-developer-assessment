import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IAuthor } from '../../types/author.interface';
import { IPost } from '../../types/post.interface';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Info = styled.div`
  width: 40px;
  margin-right: 1em;
`;
const AvatarWrapper = styled.div`
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
interface IAuthorProps {
  author: IAuthor;
  date: IPost['publishDate'];
}

const dateFormatter = new Intl.DateTimeFormat([], {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
});

export const Author = ({ author, date }: IAuthorProps) => {
  const displayDate = new Date(Date.parse(date));
  return (
    <Wrapper>
      <AvatarWrapper>
        <Name>{author.name}</Name>
        <DisplayDate>{dateFormatter.format(displayDate)}</DisplayDate>
      </AvatarWrapper>
      <Info>
        <img alt="avatar of author post" src={author.avatar} />
      </Info>
    </Wrapper>
  );
};
