import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100%;
  height: 50%;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const ErrorTitle = styled.h1`
  font-weight: 800;
  color: #FF6961;
`;

export const ErrorMessage = styled.h2`
  font-weight: 400;
  color: #FF6961;
  text-align: center;
`;
