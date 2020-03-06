import React from 'react';
import { createGlobalStyle } from "styled-components";

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap');
    body{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
`;

function App() {
    return (
        <div className="App">
        </div>
    );
}

export default App;
