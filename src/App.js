import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Home from './routes/Home';
import BoardPage from './routes/BoardPage';

const PALETTE = ['#E9ECE5', '#C0DFD9', '#B3C2BF', '#3B3A36'];
const EMPTY =  '---';

const GlobalStyle = createGlobalStyle`
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
            const newBoardList = boardList.concat([{boardKey: text.concat(Date.now()), boardName: text, listList: [], pin: false}]);
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
                if(text.length){
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

    const edit = (boardKey, listKey, cardKey) => {
      if(boardKey===EMPTY){
        return;
      }
      else{
        if(listKey===EMPTY){ //editBoard
          const newBoardList = [...boardList];
          newBoardList.forEach(board => {
            if(board.boardKey===boardKey){
              board.boardName = 'Edit';
            }
          });
          setBoardList(newBoardList);   
        }
        else if(cardKey===EMPTY){ //editList
          const newBoardList = [...boardList];
          newBoardList.forEach(board => {
            if(board.boardKey===boardKey){
              board.listList.forEach(list => {
                if(list.listKey===listKey){
                  list.listName = 'Edit';
                }
              });
            }
          });
          setBoardList(newBoardList);
        }
        else{ //removeCard
          const newBoardList = [...boardList];
          newBoardList.forEach(board => {
            if(board.boardKey===boardKey){
              board.listList.forEach(list => {
                if(list.listKey===listKey){
                  list.cardList.forEach(card => {
                    if(card.cardKey===cardKey){
                      card.context = 'Edit';
                    }
                  });
                }
              });
            }
          });
          setBoardList(newBoardList);
        }
      }
    };

    const togglePin = boardKey => {
      const newBoardList = [...boardList];
      newBoardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.pin = !board.pin;
        }
      })
      setBoardList(newBoardList);
    }

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

    const switchIndex = (boardKey, startListKey, endListKey, startIndex, endIndex) => {
      const newBoardList = [...boardList];
      let dragCard = null;
      let dragList = null;
      if(startListKey !== EMPTY){
        newBoardList.forEach(board => {
          if(board.boardKey===boardKey){
            board.listList.forEach(list => {
              if(list.listKey===startListKey){
                dragCard = list.cardList[startIndex];
                list.cardList.splice(startIndex, 1);
                if(startListKey===endListKey){
                  list.cardList.splice(endIndex, 0, dragCard);
                }
                else{
                  board.listList.forEach(list => {
                    if(list.listKey===endListKey){
                      list.cardList.splice(endIndex, 0, dragCard);
                    }
                  });
                }
              }
            });
          }
        });
        setBoardList(newBoardList);
      }
      else{
        newBoardList.forEach(board => {
          if(board.boardKey===boardKey){
            dragList = board.listList[startIndex];
            board.listList.splice(startIndex, 1);
            board.listList.splice(endIndex, 0, dragList);
          }
        });
        setBoardList(newBoardList);
      }
    };

    const functionSet = {
      create: create,
      remove: remove,
      edit: edit,
      togglePin: togglePin,
      toggleDone: toggleDone,
      switchIndex: switchIndex,
    };

    return (
        <>
            <GlobalStyle />
            <HashRouter>
              <Route path="/" exact={true} render={props => <Home {...props} boardList={boardList} functionSet={functionSet} />} />
              <Route path="/board/:boardName" render={props => <BoardPage {...props} boardList={boardList} functionSet={functionSet}/>} />
            </HashRouter>
        </>
    );
}

export default App;
