import React from 'react';

import PropTypes from 'prop-types';

import Result from './styles';

export default function CardResult({ monthlyAmount, monthlyDeposits, amount, month, year }) {
  return (
    <Result>
      <div className="resultAmount">
        <p className="resultAmount--text">Monthly amount</p>
        <p className="resultAmount--number">
          ${monthlyAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>
      <div className="resultSummary">
        <p>
          You&apos;re planning <strong>{monthlyDeposits} monthly deposit(s)</strong> to reach your{' '}
          <strong>${amount}</strong> goal by{' '}
          <strong>
            {month} {year}
          </strong>
          .
        </p>
      </div>
    </Result>
  );
}

CardResult.propTypes = {
  monthlyAmount: PropTypes.string.isRequired,
  monthlyDeposits: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
