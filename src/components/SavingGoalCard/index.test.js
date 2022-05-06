import React from 'react';

import { render, getByTestId, fireEvent } from '@testing-library/react';
import { format, add } from 'date-fns';

import { NEXT_DATE, NEXT_MONTH, NEXT_YEAR } from 'utils/constants';

import SavingGoalCard from './index';

describe('components/SavingGoalCard', () => {
  const expectAmountInput = '14000.88';

  it('should correctly render and fill amount input in card', () => {
    const { container } = render(<SavingGoalCard />);

    const amountInput = getByTestId(container, 'amount');
    expect(amountInput.textContent).toBe('');

    fireEvent.change(amountInput, { target: { value: expectAmountInput } });
    expect(amountInput.value).toBe(expectAmountInput);
  });

  it('should correctly change reach date input in card', () => {
    const { container } = render(<SavingGoalCard />);

    const reachDateInput = getByTestId(container, 'reachDate');
    expect(reachDateInput.textContent).toBe(`${NEXT_MONTH}${NEXT_YEAR}`);

    const leftIcon = getByTestId(container, 'leftIcon');
    fireEvent.click(leftIcon);
    expect(reachDateInput.textContent).toBe(`${NEXT_MONTH}${NEXT_YEAR}`);

    const rightIcon = getByTestId(container, 'rightIcon');
    fireEvent.click(rightIcon);
    const expectedDate = format(add(NEXT_DATE, { months: 1 }), 'LLLLyyyy');
    expect(reachDateInput.textContent).toBe(expectedDate);
    fireEvent.click(leftIcon);
    expect(reachDateInput.textContent).toBe(`${NEXT_MONTH}${NEXT_YEAR}`);
  });
});
