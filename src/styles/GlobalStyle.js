import { createGlobalStyle } from "styled-components";
import { PALETTE } from '../routes/Home';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html{
    height: 100%;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', 'Noto Sans KR';
    background-color: ${PALETTE[0]};
    height: 100%;
  }
  #root{
    height: 100%;
  }
  ::-webkit-scrollbar{
    background: none;
    height: 14px;
  }
  ::-webkit-scrollbar-track{
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb{
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`;