function reducer(state, action){
  switch(action.type){
    case "ADD_BOARD": {
      const { newBoardName } = action.payload;
      if(newBoardName){
        const newBoard = {
          boardKey: Date.now(),
          boardName: newBoardName,
          listList: [],
          pin: false,
        }
        return { boardList: [...state.boardList, newBoard] };
      }
      break;
    }
    case "ADD_LIST": {
      const { newListName, boardKey } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          if(newListName){
            const newList = {
              listKey: String(Date.now()),
              listName: newListName,
              cardList: []
            }
            board.listList.push(newList);
          }
        }
      });
      return {...state};
    }
    case "ADD_CARD": {
      const { newCardName, boardKey, listKey } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.listList.forEach(list => {
            if(list.listKey===listKey){
              if(newCardName){
                const newCard = {
                  cardKey: String(Date.now()),
                  cardName: newCardName,
                  done: false,
                  description: 'Add a description',
                }
                list.cardList.push(newCard);
              }
            }
          });
        }
      });
      return {...state};  
    }
    case "DELETE_BOARD": {
      const { boardKey } = action.payload;
      const newBoardList = state.boardList.filter(board => board.boardKey!==boardKey);
      return { boardList: newBoardList };
    }
    case "DELETE_LIST": {
      const { boardKey, listKey } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.listList = board.listList.filter(list => list.listKey !== listKey);
        }
      });
      return {...state};
    }
    case "DELETE_CARD": {
      const { boardKey, listKey, cardKey } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.listList.forEach(list => {
            if(list.listKey===listKey){
              list.cardList = list.cardList.filter(card => card.cardKey !== cardKey);
            }
          });
        }
      });
      return {...state};
    }
    case "EDIT_BOARD": {
      const { boardKey, newBoardName } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.boardName = newBoardName;
        }
      });
      return {...state};
    }
    case "EDIT_LIST": {
      const { boardKey, listKey, newListName } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.listList.forEach(list => {
            if(list.listKey===listKey){
              list.listName = newListName;
            }
          });
        }
      });
      return {...state};
    }
    case "EDIT_CARD": {
      const { boardKey, listKey, cardKey, newCardName } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.listList.forEach(list => {
            if(list.listKey===listKey){
              list.cardList.forEach(card => {
                if(card.cardKey===cardKey){
                  card.cardName = newCardName;
                }
              });
            }
          });
        }
      });
      return {...state};
    }
    case "TOGGLE_PIN": {
      const { boardKey } = action.payload;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          board.pin = !board.pin;
        }
      });
      return {...state};
    }
    case "TOGGLE_DONE": {
      const { boardKey, listKey, cardKey } = action.payload;
      state.boardList.forEach(board => {
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
      return {...state};
    }
    case "SWITCH_CARD": {
      const { boardKey, startListKey, endListKey, startIndex, endIndex } = action.payload;
      let dragCard = null;
      state.boardList.forEach(board => {
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
      return {...state};
    }
    case "SWITCH_LIST": {
      const { boardKey, startIndex, endIndex } = action.payload;
      let dragList = null;
      state.boardList.forEach(board => {
        if(board.boardKey===boardKey){
          dragList = board.listList[startIndex];
          board.listList.splice(startIndex, 1);
          board.listList.splice(endIndex, 0, dragList);
        }
      });
      return {...state};
    }
    default:
      return state;
  }
}

export default reducer;