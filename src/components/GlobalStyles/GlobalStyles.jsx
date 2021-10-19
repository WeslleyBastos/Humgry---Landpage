import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #0A0A09;
    --orange: #FF6F42;
    --yellow: #F6ED1B;
    --white: #fff;
    --red: #E31B0E;
    --gray: #7C7575
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--white);
    color: var(--black);
    font-size: 1rem;
    font-family: 'Mulish', sans-serif;
    overflow-x: hidden;
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
}
  h1 {
    font-family: 'Jomhuria', cursive;
    font-weight: bold;
  }

  h2, h3, p {
    font-family: 'Halant';
    
  }

  input {
    outline: none;
  }
  select {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  }

  ::-webkit-scrollbar-thumb{
  background: var(--red);
  border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb:hover{
  background: var(--yellow);

  }

  ::-webkit-scrollbar-track{
  background: #E3E3E3;
  border-radius: 30px;
  box-shadow: inset 0px 0px 0px 0px #F0F0F0;
  }
  
`;