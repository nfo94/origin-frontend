import React from 'react';

import PropTypes from 'prop-types';

import ArrowLeft from 'assets/icons/icon-left.svg';
import ArrowRight from 'assets/icons/icon-right.svg';
import { OPERATIONS } from 'utils/constants';

import Input from './styles';

export default function MonthYearInput({ month, year, handleReachDate }) {
  const handleKeyDown = event => {
    const { code } = event;
    if (code === 'ArrowRight') handleReachDate(OPERATIONS.add);
    if (code === 'ArrowLeft') handleReachDate(OPERATIONS.subtract);
  };

  return (
    <label htmlFor="reachDate">
      Reach goal by
      <Input tabIndex="0" onKeyDown={handleKeyDown}>
        <div
          role="presentation"
          className="icon"
          onClick={() => handleReachDate(OPERATIONS.subtract)}
          data-testid="leftIcon"
        >
          <img src={ArrowLeft} alt="arrow-left" />
        </div>

        <div className="reachDate" data-testid="reachDate">
          <p>
            <strong>{month}</strong>
          </p>
          <p>{year}</p>
        </div>

        <div
          role="presentation"
          className="icon"
          onClick={() => handleReachDate(OPERATIONS.add)}
          data-testid="rightIcon"
        >
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </Input>
    </label>
  );
}

MonthYearInput.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  handleReachDate: PropTypes.func.isRequired,
};
