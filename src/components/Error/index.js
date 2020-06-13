import React from 'react';
import { ErrorContainer, ErrorTitle, ErrorMessage } from './styles';

const Error = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorTitle>Ups, ha ocurrido un error</ErrorTitle>
      <ErrorMessage>{error}</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
