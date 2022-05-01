import React from 'react';

import GlobalStyle from 'styles/global';
import Navbar from 'components/Navbar';
import SavingGoalPlan from 'pages/SavingGoalPlan';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SavingGoalPlan />
    </>
  );
}
