import React from 'react';
import { createGlobalStyle } from "styled-components";
import Home from './routes/Home';

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap');
    body{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    font-family: Montserrat;
`;

function App() {
    return (
        <Home />
    );
}

export default App;
