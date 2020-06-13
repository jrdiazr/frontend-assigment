import React from 'react';
import {
  ArticleContainer,
  ArticleImageContainer,
  ArticleImageLabel,
  ArticleImage,
  ArticleHeader,
  ArticleTitle,
  ArticleAboutContainer,
  ArticleAboutImage,
  ArticleHeaderSave,
  ArticleHeaderLeft,
  ArticleAbout,
  ArticleAboutData,
  ArticleHeaderRight,
  DataSpan,
  ArticleAboutTitle,
  ArticleTagList,
  ArticleTag,
  ArticleContent,
  ArticleSocialActions,
  SocialAction,
  SocialActionText
} from './styles';
import DocRedLogo from '../../../public/docred-logo.png';
import Icon from 'feather-icons-react';
import Error from '../Error';

const Article = ({ id, title = 'Title Article', image = 'https://4.bp.blogspot.com/-j7PvZf3JTNw/WJSYy5NxlzI/AAAAAAAAAWM/aitCnMFw2YQwuwetunDaQMdXyxH9h4gbACLcB/w1200-h630-p-k-no-nu/Medicina.jpg', content = '', error }) => {
  const handleSocialClick = (buttonClicked) => {
    window.alert(buttonClicked);
  };
  if (error) {
    return <Error error={error} />;
  } else {
    return (
      <ArticleContainer>
        <ArticleImageContainer>
          <ArticleImageLabel>Noticia</ArticleImageLabel>
          {image && <ArticleImage src={image} />}
        </ArticleImageContainer>
        <ArticleHeader>
          <ArticleHeaderLeft>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleAboutContainer>
              <ArticleAboutImage src={DocRedLogo} />
              <ArticleAbout>
                <ArticleAboutTitle>Noticias DocRed</ArticleAboutTitle>
                <ArticleAboutData>
                  <DataSpan>Hace 12 h</DataSpan>
                  <DataSpan>Publicado: 17/01/18</DataSpan>
                  <DataSpan>Lectura: 3 min.</DataSpan>
                </ArticleAboutData>
              </ArticleAbout>
            </ArticleAboutContainer>
            <ArticleTagList>
              <ArticleTag>Medicina Interna</ArticleTag>
              <ArticleTag>Pediatría</ArticleTag>
              <ArticleTag>Obstetricia</ArticleTag>
            </ArticleTagList>
          </ArticleHeaderLeft>
          <ArticleHeaderRight>
            <ArticleHeaderSave onClick={() => handleSocialClick('Guardado')}>Guardar</ArticleHeaderSave>
          </ArticleHeaderRight>
        </ArticleHeader>
        <ArticleContent>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ArticleContent>
        <ArticleSocialActions>
          <SocialAction name='Destacar' onClick={() => handleSocialClick('Destacado')}>
            <Icon name='Destacar' icon='star' size={20} stroke='#cae0f1' />
            <SocialActionText name='Destacar'>Destacar</SocialActionText>
          </SocialAction>
          <SocialAction name='Comentar' onClick={() => handleSocialClick('Comentado')}>
            <Icon icon='message-square' size={20} stroke='#cae0f1' />
            <SocialActionText>Comentar</SocialActionText>
          </SocialAction>
          <SocialAction name='Compartir' onClick={() => handleSocialClick('Compartido')}>
            <Icon icon='arrow-up-right' size={20} stroke='#cae0f1' />
            <SocialActionText>Compartir</SocialActionText>
          </SocialAction>
        </ArticleSocialActions>
      </ArticleContainer>
    );
  }
};

export default Article;
