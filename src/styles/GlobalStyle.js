import { createGlobalStyle } from "styled-components";
import { PALETTE } from '../routes/Home';

export const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Lora', 'Noto Serif KR';
        background-color: ${PALETTE[0]};
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