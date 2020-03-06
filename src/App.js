import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Home from './routes/Home';
import BoardPage from './routes/BoardPage';

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
    const [boardList, setBoardList] = React.useState([]);
    return (
        <>
            <GlobalStyle />
            <HashRouter>
              <Route path="/" exact={true} render={props => <Home {...props} boardList={boardList}/>} />
              <Route path="/board/:boardName" component={BoardPage} />
            </HashRouter>
        </>
    );
}

export default App;
