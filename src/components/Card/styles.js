import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 130px;
  padding: 15px 10px;
  display: grid;
  grid-template-columns: 40% 55%;
  grid-gap: 5%;
  margin-bottom: 1px;
  border-bottom: 1px solid #edebeb;
`;

export const ImageContainer = styled.figure`
  margin: 0;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #000;
  object-fit: cover;
`;

export const ImageLabel = styled.p`
  margin: 0;
  background: #1a80c7;  
  position: absolute;
  top: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-transform: uppercase;
  color: white;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  font-size: 10px;
`;

export const NewInfo = styled.div`
  display: block;
  padding-top: 15px;
  padding-bottom: 5px;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 700;  
`;

export const Author = styled.p`
  margin: 0;
  color: lightgray;
  text-transform: capitalize;
  font-size: 11px;
`;

export const StatsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

export const Stats = styled.button`
  display: flex;  
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const NumberStat = styled.span`
  color: gray;  
  margin-left: 2px;
  font-size: 10px;
`;
