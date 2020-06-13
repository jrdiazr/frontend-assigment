import React from 'react';
import { Footer, Anchor, About } from './styles';
import TransparentLogo from '../TransparentLogo';
import Link from 'next/link';

export default function index () {
  return (
    <Footer>
      <Link href='/'>
        <Anchor>
          <TransparentLogo />
        </Anchor>
      </Link>
      <Link href='/'>
        <Anchor>
          Preguntas frecuentes
        </Anchor>
      </Link>
      <Link href='/'>
        <Anchor>
          Contáctanos
        </Anchor>
      </Link>
      <Link href='/'>
        <Anchor>
          Informacíon
        </Anchor>
      </Link>
      <Link href='/'>
        <Anchor>
          <About href=''>DocRed © 2019. Todos los derechos reservados</About>
        </Anchor>
      </Link>
    </Footer>
  );
}
