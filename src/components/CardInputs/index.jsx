import React from 'react';

import Inputs from './styles';

export default function Card() {
  return (
    <Inputs>
      <label htmlFor="amount">
        Total amount
        <input value="25,000" name="amount" className="amount" />
      </label>
      <label htmlFor="reachGoal">
        Reach goal by
        <input value="2015" name="reachGoal" className="reachGoal" />
      </label>
    </Inputs>
  );
}
