import styled from 'styled-components';

export const ArticleContainer = styled.article`
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  background: white;
  padding: 20px;
  box-shadow: 1px 5px 15px rgba(0, 0, 0, .1);
`;

export const ArticleImageContainer = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  height: 70%;
  background: rgb(34,164,240);
  background: linear-gradient(15deg, rgba(34,164,240,1) 0%, rgba(12,201,177,1) 100%);
`;

export const ArticleImageLabel = styled.p`
  margin: 0;
  background: #1a80c7;  
  position: absolute;
  top: 20px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  text-transform: uppercase;
  color: white;
  padding: 3px 15px;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ArticleHeader = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 20px;
  height: 120px;
`;

export const ArticleHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleHeaderRight = styled.div`
`;

export const ArticleHeaderSave = styled.button`
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #65b32e;
  border: none;
  outline: none;
  padding: 5px 20px;
  color: white;
  cursor: pointer;
  font-size: 11px;
`;

export const ArticleTitle = styled.h1`
  margin: 0;
`;

export const ArticleAboutContainer = styled.div`
  display: flex;
`;

export const ArticleAboutImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const ArticleAbout = styled.div`
  width: 100%;
`;

export const ArticleAboutTitle = styled.h4`
  margin: 0px;
`;

export const ArticleAboutData = styled.div`
  background: #edebeb;
  display: grid;
  grid-template-columns: 20% 45% 35%;
  grid-gap: 2px;
  font-size: 11px;
`;

export const DataSpan = styled.span`
  width: 100%;
  background: white;
  color: darkgray;
  text-align: center;
`;

export const ArticleTagList = styled.div`
  display: flex;
`;

export const ArticleTag = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  background: #f4f8fc;
  color: #1a80c7;
  margin-right: 10px;
`;

export const ArticleContent = styled.div`
`;

export const ArticleSocialActions = styled.div`
  width: 50%;
  margin: 30px auto 10px;
  border: 1px solid #1a80c7;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px 15px;
  font-size: 11px;
  color: darkgray;
`;

export const SocialAction = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SocialActionText = styled.span`
  margin-left: 5px;
`
;
