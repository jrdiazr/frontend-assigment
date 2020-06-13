import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 10px;
  max-width: 300px;
`;

export const Title = styled.p`
  margin: 0px;
  color: #1a80c7;
  font-weight: 700;  
  font-size: 12px;
`;

export const TitleLine = styled.div`
  border-top: 1px solid #1a80c7;
  position: relative;
  top: 50%;
`;

export const CardListContainer = styled.div`
  border-radius: 10px;
  background: white;
  font-size: 12px;
  box-shadow: 1px 5px 15px rgba(0, 0, 0, .1);
  max-width: 300px;
`;
