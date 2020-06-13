import React from 'react';
import { Title, Author, StatsContainer, Stats, Image, CardContainer, NewInfo, ImageContainer, ImageLabel, NumberStat } from './styles';
import Icon from 'feather-icons-react';

const Card = ({ title, author, likes, comments, views, image }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} />
        <ImageLabel>Noticia</ImageLabel>
      </ImageContainer>
      <div>
        <NewInfo>
          <Title>{title}</Title>
          <Author>Por: {author}</Author>
        </NewInfo>
        <StatsContainer>
          <Stats>
            <Icon icon='star' size={20} stroke='#cae0f1' />
            <NumberStat>{likes}</NumberStat>
          </Stats>
          <Stats>
            <Icon icon='message-square' size={20} stroke='#cae0f1' />
            <NumberStat>{comments}</NumberStat>
          </Stats>
          <Stats>
            <Icon icon='eye' size={20} stroke='gray' />
            <NumberStat>{views}</NumberStat>
          </Stats>
        </StatsContainer>

      </div>
    </CardContainer>
  );
};

export default Card;
