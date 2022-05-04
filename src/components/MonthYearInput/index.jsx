import React from 'react';

import PropTypes from 'prop-types';

import { OPERATIONS } from 'utils/constants';
import { ReactComponent as ArrowRight } from 'assets/icons/icon-right.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/icon-left.svg';

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
        <div role="button" className="icon">
          <ArrowLeft onClick={() => handleReachDate(OPERATIONS.subtract)} />
        </div>

        <div className="reachDate">
          <p>
            <strong>{month}</strong>
          </p>
          <p>{year}</p>
        </div>

        <div role="button" className="icon">
          <ArrowRight onClick={() => handleReachDate(OPERATIONS.add)} />
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
