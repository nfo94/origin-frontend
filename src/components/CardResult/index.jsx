import React from 'react';

import Result from './styles';

export default function Card() {
  return (
    <Result>
      <div className="resultAmount">
        <p className="resultAmount--text">Monthly amount</p>
        <p className="resultAmount--number">$520.83</p>
      </div>
      <div className="resultSummary">
        <p>
          You&apos;re planning <strong>48 monthly deposits</strong> to reach you&apos;{' '}
          <strong>$2000.00</strong> goal by October 2020
        </p>
      </div>
    </Result>
  );
}
