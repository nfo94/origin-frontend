import React from 'react';

import Button from 'components/Button';
import CardHeader from 'components/CardHeader';
import CardInputs from 'components/CardInputs';
import CardResult from 'components/CardResult';
import Container from './styles';

export default function Card() {
  return (
    <Container>
      <div className="item">
        <CardHeader />
      </div>

      <div className="item">
        <CardInputs />
      </div>

      <div className="item">
        <CardResult />
      </div>

      <div className="item btn">
        <Button />
      </div>
    </Container>
  );
}
