import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 400;
    color: var(--brandColorPrimary);
    text-align: center;
  }
`;

export default Container;
