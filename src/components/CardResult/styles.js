import styled from 'styled-components';

const Result = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--blueGray50);
  border-radius: 4px;

  .resultAmount {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .resultAmount--text {
      color: var(--blueGray900);
      font-weight: 400;
      font-size: 1.2rem;
    }

    .resultAmount--number {
      font-family: 'Rubik', sans-serif;
      color: var(--brandColorSecondary);
      font-size: 2rem;
    }
  }

  .resultSummary {
    background-color: var(--blueGray10);
    padding: 20px;
    color: var(--blueGray900);

    p {
      font-size: 0.8rem;
    }
  }
`;

export default Result;
