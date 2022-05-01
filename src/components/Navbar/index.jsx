import React from 'react';

import { ReactComponent as OriginLogo } from 'assets/icons/logo.svg';
import Container from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        <div>
          <OriginLogo />
        </div>
      </header>
    </Container>
  );
}
