import React from 'react';

import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

import AmountLabel from './styles';

export default function AmountInput({ amount, handleTotalAmount }) {
  return (
    <AmountLabel label="amount">
      Total amount
      <IMaskInput
        className="amount"
        mask={Number}
        tabIndex="0"
        radix="."
        thousandsSeparator=","
        value={amount}
        unmask={false}
        onAccept={handleTotalAmount}
        placeholder="$"
      />
    </AmountLabel>
  );
}

AmountInput.propTypes = {
  amount: PropTypes.string.isRequired,
  handleTotalAmount: PropTypes.func.isRequired,
};
