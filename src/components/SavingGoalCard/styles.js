import styled from 'styled-components';

export const Container = styled.div`
  background: var(--neutralWhite);
  border: 1px solid var(--blueGray10);
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 40px;
  max-width: 620px;
  max-height: 560px;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 868px) {
    padding: 40px 22px 40px 22px;
    max-height: 100%;
  }

  .item:first-child {
    margin-bottom: 20px;
  }

  .item:nth-child(3) {
    margin-top: 24px;
  }

  .item:last-child {
    margin-top: 32px;
  }

  .btn {
    display: flex;
    justify-content: center;
  }
`;

export const CardInputs = styled.div`
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
`;
