import styled from 'styled-components';

export const AccountBarContainer = styled.ul`
  height: 40px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  margin: 0;
  align-items: center;
  border-left: 2px solid #4c9ad1;
`;

export const Count = styled.span`
  width: 12px;
  height: 12px;
  background: #5baa44;
  border-radius: 50%;  
  position: absolute;
  top: -1px;
  left: 18px;
  z-index: 2;
  font-size: 9px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.button`
  position: relative;  
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 22px;
  border: 2px solid #FFF;
  border-radius: 50%;
  object-fit: cover;
`;
