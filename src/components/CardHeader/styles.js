import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  h2 {
    font-family: 'Rubik', sans-serif;
    color: var(--blueGray900);
    font-weight: 500;
  }

  p {
    color: var(--blueGray400);
  }
`;

export default Header;
