import { format, add } from 'date-fns';

export const MONTH_INDEX = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const CURRENT_MONTH = MONTH_INDEX[format(new Date(), 'LLLL')];

const CURRENT_YEAR = format(new Date(), 'yyyy');

export const CURRENT_DATE = new Date(CURRENT_YEAR, CURRENT_MONTH);

export const NEXT_DATE = add(CURRENT_DATE, { months: 1 });

export const NEXT_MONTH = format(NEXT_DATE, 'LLLL');

export const NEXT_YEAR = format(NEXT_DATE, 'yyyy');

export const OPERATIONS = {
  add: '+',
  subtract: '-',
};
