import React, { useState, useEffect } from 'react';

import { format, add, sub, compareAsc, eachMonthOfInterval } from 'date-fns';

import { ReactComponent as BuyAHouse } from 'assets/icons/buy-a-house.svg';
import AmountInput from 'components/AmountInput';
import Button from 'components/Button';
import CardHeader from 'components/CardHeader';
import CardResult from 'components/CardResult';
import MonthYearInput from 'components/MonthYearInput';
import { NEXT_DATE, NEXT_MONTH, NEXT_YEAR, OPERATIONS } from 'utils/constants';

import { Container, CardInputs } from './styles';

export default function SavingGoalCard() {
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState(NEXT_MONTH);
  const [year, setYear] = useState(NEXT_YEAR);
  const [date, setDate] = useState(NEXT_DATE);
  const [monthlyAmount, setMonthlyAmount] = useState('');
  const [monthlyDeposits, setMonthlyDeposits] = useState('');

  useEffect(() => {
    const interval = eachMonthOfInterval({
      start: Date.parse(NEXT_DATE),
      end: Date.parse(date),
    });
    const parsedMonths = parseFloat(interval.length);
    const normalizedAmount = amount === '' ? 0 : amount.replace(/,/g, '');
    if (normalizedAmount === 0 && parsedMonths === 0) {
      setMonthlyDeposits('');
      setMonthlyAmount('');
      return;
    }
    const parsedAmount = parseFloat(normalizedAmount);
    const result = (parsedAmount / parsedMonths).toFixed(2);
    setMonthlyAmount(result);
    setMonthlyDeposits(parsedMonths.toString());
  }, [month, year, amount]);

  const handleReachDate = operation => {
    if (operation === OPERATIONS.add) {
      const newDate = add(date, { months: 1 });
      const newMonth = format(newDate, 'LLLL');
      const newYear = format(newDate, 'yyyy');
      setDate(newDate);
      setMonth(newMonth);
      setYear(newYear);
    }
    if (operation === OPERATIONS.subtract) {
      const newDate = sub(date, { months: 1 });
      if (compareAsc(NEXT_DATE, newDate) === 1) {
        setMonth(month);
        setYear(year);
      } else {
        const newMonth = format(newDate, 'LLLL');
        const newYear = format(newDate, 'yyyy');
        setDate(newDate);
        setMonth(newMonth);
        setYear(newYear);
      }
    }
  };

  return (
    <Container>
      <div className="item">
        <CardHeader Icon={BuyAHouse} title="Buy a house" subtitle="Saving goal" />
      </div>

      <div className="item">
        <CardInputs>
          <AmountInput amount={amount} handleTotalAmount={value => setAmount(value)} />
          <MonthYearInput month={month} year={year} handleReachDate={handleReachDate} />
        </CardInputs>
      </div>

      <div className="item">
        <CardResult
          monthlyAmount={monthlyAmount}
          monthlyDeposits={monthlyDeposits}
          amount={amount}
          month={month}
          year={year}
        />
      </div>

      <div className="item btn">
        <Button text="Confirm" />
      </div>
    </Container>
  );
}
