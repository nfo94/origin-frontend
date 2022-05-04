import React from 'react';

import Navbar from 'components/Navbar';
import SavingGoalPlan from 'pages/SavingGoalPlan';
import GlobalStyle from 'styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SavingGoalPlan />
    </>
  );
}
