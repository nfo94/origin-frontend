import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --neutralWhite: #FFFFFF;
    --brandColorPrimary: #1B31A8;
    --brandColorSecondary: #0079FF;
    --blueGray900: #1E2A32;
    --blueGray600: #4D6475;
    --blueGray400: #708797;
    --blueGray100: #CBD5DC;
    --blueGray50: #E9EEF2;
    --blueGray10: #F4F8FA;
    --level4: rgba(30, 42, 50, 0.08);
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--blueGray10);
  }

  body, input, button {
    font-family: 'Work Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
