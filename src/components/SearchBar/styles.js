import styled from 'styled-components';

export const Container = styled.form`
  margin-left: 50px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchIconContainer = styled.button`    
  box-sizing: border-box;
  background: white;
  border: none;
  outline: none;
  height: inherit;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-right: 2px;
  padding: 5px;  
`;

export const TextInput = styled.input`
  box-sizing: border-box;
  width: 250px;
  height: inherit;
  border: none;
  border-bottom-right-radius: 10px;
  outline: none;
  padding-left: 10px;
  font-size: 12px;
  color: #bababa;
  font-weight: 200;
`;
