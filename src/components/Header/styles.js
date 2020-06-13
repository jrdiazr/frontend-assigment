import styled from 'styled-components';

export const HeaderContainer = styled.header`  
  background: #1a80c7;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 5px 2% 0;
  align-items: center;
  justify-content: center;
  justify-items: left;  
  box-shadow: 10px 5px 15px rgba(0, 0, 0, .2);
`;

export const Left = styled.div`
  width: 82%;
  max-width: 1200px;
  display:flex;
  align-items: center;  
`;

export const Rigth = styled.div`
  width: 15%;
  min-width: 150px;  
  display:flex;
  align-items: center;
  justify-content: center;
`;
