import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import BoardPage from './routes/BoardPage';
import reducer from './reducer';
import { GlobalStyle } from './styles/GlobalStyle';

export const BoardListContext = React.createContext(
  {
      boardList: JSON.parse(localStorage.getItem('localBoardList')) || []
  }
);

function App() {
    const initialState = React.useContext(BoardListContext);
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const contextValue = React.useMemo(() => {
      return { state, dispatch };
    }, [state, dispatch]);
    React.useEffect(() => {
      localStorage.setItem('localBoardList', JSON.stringify(state.boardList));
    }, [state]);
    return (
        <BoardListContext.Provider value={contextValue}>
            <GlobalStyle />
            <HashRouter>
              <Route path="/" exact={true} render={props => <Home {...props} boardList={state.boardList} />} />
              <Route path="/:boardKey/:boardName" render={props => <BoardPage {...props} boardList={state.boardList} />} />
            </HashRouter>
        </BoardListContext.Provider>
    );
}

export default App;
