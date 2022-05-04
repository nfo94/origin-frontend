import styled from 'styled-components';

const Input = styled.div`
  border: 1px solid var(--blueGray50);
  padding: 15px 10px 15px 10px;
  border-radius: 4px;
  height: 56px;
  margin-top: 6px;
  width: 100%;
  width: 195px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 320px) and (max-width: 868px) {
    width: 100%;
  }

  .reachDate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 44px;

    p {
      line-height: 120%;
    }

    p:last-child {
      color: var(--blueGray400);
    }
  }

  .icon {
    cursor: pointer;
    padding: 8px 12px 8px 12px;
  }
`;

export default Input;
