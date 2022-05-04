import React from 'react';

import SavingGoalCard from 'components/SavingGoalCard';

import Container from './styles';

export default function SavingGoalPlan() {
  return (
    <Container>
      <h3>
        Let&apos;s plan your <strong>saving goal</strong>.
      </h3>
      <SavingGoalCard />
    </Container>
  );
}
