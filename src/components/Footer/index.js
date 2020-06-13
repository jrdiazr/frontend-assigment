import React from 'react';
import { Footer, Anchor, About } from './styles';
import TransparentLogo from '../TransparentLogo';

export default function index () {
  return (
    <Footer>
      <Anchor href='/'><TransparentLogo /></Anchor>
      <Anchor href=''>Preguntas frecuentes</Anchor>
      <Anchor href=''>Contáctanos</Anchor>
      <Anchor href=''>Informacíon</Anchor>
      <About href=''>DocRed © 2019. Todos los derechos reservados</About>
    </Footer>
  );
}
