import React from 'react';
import { createGlobalStyle } from "styled-components";
import Home from './routes/Home';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap');
    body{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Montserrat';
    }
`;

function App() {
    return (
      <>
        <GlobalStyle />
        <Home />
      </>
    );
}

export default App;
