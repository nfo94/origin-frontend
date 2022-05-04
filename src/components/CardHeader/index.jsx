import React from 'react';

import { ReactComponent as BuyAHouse } from 'assets/icons/buy-a-house.svg';

import Header from './styles';

export default function CardHeader() {
  return (
    <Header>
      <div>
        <BuyAHouse />
      </div>
      <div>
        <h2>Buy a house</h2>
        <p>Saving goal</p>
      </div>
    </Header>
  );
}
