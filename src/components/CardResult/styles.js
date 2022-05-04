import styled from 'styled-components';

const Result = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--blueGray50);
  border-radius: 4px;

  .resultAmount {
    padding: 30px 30px 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 320px) and (max-width: 868px) {
      padding: 30px 20px 20px 20px;
    }

    .resultAmount--text {
      color: var(--blueGray900);
      font-weight: 400;
      font-size: 1.2rem;

      @media (min-width: 320px) and (max-width: 868px) {
        font-size: 1.1rem;
      }
    }

    .resultAmount--number {
      font-family: 'Rubik', sans-serif;
      color: var(--brandColorSecondary);
      font-size: 2rem;

      @media (min-width: 320px) and (max-width: 868px) {
        font-size: 1.4rem;
      }
    }
  }

  .resultSummary {
    background-color: var(--blueGray10);
    padding: 24px 32px 24px 32px;
    color: var(--blueGray900);

    p {
      font-size: 0.9rem;
    }
  }
`;

export default Result;
