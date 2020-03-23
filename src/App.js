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
  const findElement = (boardKey="", listKey="", cardKey="") => {
    if(!boardKey) return state.boardList;
    const board = state.boardList.find(board => board.boardKey===boardKey);
    if(!listKey) return board;
    const list = board.listList.find(list => list.listKey===listKey);
    if(!cardKey) return list;
    const card = list.cardList.find(card => card.cardKey===cardKey);
    return card;
  };
  React.useEffect(() => {
    localStorage.setItem('localBoardList', JSON.stringify(state.boardList));
  }, [state]);
  
  return (
    <BoardListContext.Provider value={{ dispatch, findElement }}>
      <GlobalStyle />
      <HashRouter>
        <Router boardList={state.boardList} />
      </HashRouter>
    </BoardListContext.Provider>
  );
}

export default App;
