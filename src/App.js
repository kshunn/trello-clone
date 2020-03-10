import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Home from './routes/Home';
import BoardPage from './routes/BoardPage';

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Lora', 'Noto Serif KR';
        background-color: #e9ece5;
    }
    ::-webkit-scrollbar{
      background: #f1f1f1;
      height: 14px;
    }
    ::-webkit-scrollbar-track{
      box-shadow: inset 0 0 10px #00000070;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
      background: #8395a7;
      border-radius: 10px;
    }
`;

export const EMPTY =  '---';

function App() {
    const [boardList, setBoardList] = React.useState(
      JSON.parse(localStorage.getItem('localBoardList')) || []
    );

    React.useEffect(() => {
      localStorage.setItem('localBoardList', JSON.stringify(boardList));
    }, [boardList]);

    const create = (boardKey, listKey, text) => {
      if(boardKey===EMPTY){ //createBoard
        const check = boardList.filter(board => board.boardName === text);
        if(!check.length && text.length){
            const newBoardList = boardList.concat([{boardKey: text.concat(Date.now()), boardName: text, listList: []}]);
            setBoardList(newBoardList);
        } 
      }
      else if(listKey===EMPTY){ //createList
        const newBoardList = [...boardList];
        newBoardList.forEach(board => {
          if(board.boardKey===boardKey){
            const check = board.listList.filter(list => list.listName === text);
            if(!check.length && text.length){
              board.listList.push({listKey: text.concat(Date.now()), listName: text, cardList: []});
            }
          }
        });
        setBoardList(newBoardList);
      }
      else{ //createCard
        const newBoardList = [...boardList];
        newBoardList.forEach(board => {
          if(board.boardKey===boardKey){
            board.listList.forEach(list => {
              if(list.listKey===listKey){
                const check = list.cardList.filter(card => card.content === text);
                if(!check.length && text.length){
                  list.cardList.push({cardKey: text.concat(Date.now()), content: text, done: false});
                }
              }
            });
          }
        });
        setBoardList(newBoardList);
      } 
    };


    const remove = (boardKey, listKey, cardKey) => {
      if(boardKey===EMPTY){
        return;
      }
      else{
        if(listKey===EMPTY){ //removeBoard
          const newBoardList = boardList.filter(board => board.boardKey !== boardKey);
          setBoardList(newBoardList);   
        }
        else if(cardKey===EMPTY){ //removeList
          const newBoardList = [...boardList];
          newBoardList.forEach(board => {
            if(board.boardKey===boardKey){
              board.listList = board.listList.filter(list => list.listKey !== listKey);
            }
          });
          setBoardList(newBoardList);
          setBoardList(newBoardList);
        }
        else{ //removeCard
          const newBoardList = [...boardList];
          newBoardList.forEach(board => {
            if(board.boardKey===boardKey){
              board.listList.forEach(list => {
                if(list.listKey===listKey){
                  list.cardList = list.cardList.filter(card => card.cardKey !== cardKey);
                }
              });
            }
          });
          setBoardList(newBoardList);
        }
      }
    };

    const toggleDone = (boardKey, listKey, cardKey) => {
      const newBoardList = [...boardList];
      newBoardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.listList.forEach(list => {
            if(list.listKey===listKey){
              list.cardList.forEach(card => {
                if(card.cardKey===cardKey){
                  card.done = !card.done;
                }
              });
            }
          });
        }
      });
      setBoardList(newBoardList);
    };

    return (
        <>
            <GlobalStyle />
            <HashRouter>
              <Route path="/" exact={true} render={props => <Home {...props} boardList={boardList} create={create} remove={remove}/>} />
              <Route path="/board/:boardName" render={props => <BoardPage {...props} boardList={boardList} create={create} remove={remove} toggleDone={toggleDone}/>} />
            </HashRouter>
        </>
    );
}

export default App;
