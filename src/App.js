import React from 'react';
import { HashRouter } from 'react-router-dom';
import reducer from './reducer';
import { GlobalStyle } from './styles/GlobalStyle';
import Router from './Router';

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
              <Router boardList={state.boardList}/>
              {/* <Switch location={background||location}>
                <Route path="/" exact={true} render={props => <Home {...props} boardList={state.boardList} />} />
                <Route path="/:boardKey/:boardName" render={props => <BoardPage {...props} boardList={state.boardList} />} />
              </Switch>
              {background && <Route path="/:cardKey/:cardName" children={<CardPage />} />} */}
            </HashRouter>
        </BoardListContext.Provider>
    );
}

export default App;
