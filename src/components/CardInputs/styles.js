import styled from 'styled-components';

const Inputs = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 320px) and (max-width: 868px) {
    flex-direction: column;
  }

  label {
    color: var(--blueGray900);
    font-size: 0.9rem;
  }

  label:not(:last-child) {
    margin-right: 16px;

    @media (min-width: 320px) and (max-width: 868px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }

  input {
    border: 1px solid var(--blueGray50);
    padding: 14px 5px 13px 17px;
    border-radius: 4px;
    height: 56px;
    margin-top: 6px;
    width: 100%;
  }

  .amount {
    font-family: 'Rubik', sans-serif;
    color: var(--blueGray600);
    font-weight: 500;
    font-size: 1.5rem;
  }

  .reachGoal {
  }
`;

export default Inputs;
