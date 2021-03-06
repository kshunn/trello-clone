import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Button, Input, ADD, DELETE, PALETTE } from '../routes/Home';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ContentEditable from 'react-contenteditable';
import { BoardListContext } from '../App';
import TextareaAutosize from 'react-autosize-textarea';

export default function List({ boardKey, listKey }) {
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const { listName, cardList } = findElement(boardKey, listKey);
  const [text, setText] = useState("");
  const [nextListName, setNextListName] = useState(listName);
  const nextListNameRef = useRef();
  const createNewCard = text => {
    dispatch({
      type: "ADD_CARD",
      payload: {
        newCardName: text,
        boardKey: boardKey,
        listKey: listKey,
      }
    });
  };
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if(text) createNewCard(text);
    setText("");
  };
  const deleteCard = (key) => {
    const askDelete = window.confirm("Do you really want to remove the card?");
    if (askDelete) {
      dispatch({
        type: "DELETE_CARD",
        payload: {
          boardKey: boardKey,
          listKey: listKey,
          cardKey: key
        }
      });
    }
  };
  const changeText = e => {
    setNextListName(e.target.value);
  };
  const editListName = () => {
    const nextListName = nextListNameRef.current.innerHTML;
    if (!nextListName) {
      setNextListName(listName);
      return;
    }
    else dispatch({
      type: "EDIT_LIST",
      payload: {
        newListName: nextListName,
        boardKey: boardKey,
        listKey: listKey,
      }
    });
  }
  const disableNewLines = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.returnValue = false;
      if (e.preventDefault) {
        e.preventDefault();
      }
    }
  }
  return (
    <ListContainer>
      <ListTitle>
        <StyledEditable
          innerRef={nextListNameRef}
          html={nextListName}
          disabled={false}
          onChange={changeText}
          onBlur={editListName}
          spellCheck='false'
          onKeyPress={disableNewLines}
        />
      </ListTitle>
      <Droppable droppableId={listKey} type="card">
        {(provided) => (
          <ScrollView
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cardList.map((card, index) => (
              <Draggable key={card.cardKey} draggableId={card.cardKey} index={index}>
                {(provided, snapshot) => (
                  <CardWrapper
                    key={card.cardKey}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                  >
                    <Card
                      boardKey={boardKey}
                      listKey={listKey}
                      cardKey={card.cardKey}
                    />
                    <CardButton onClick={() => deleteCard(card.cardKey)}>
                      <i className={DELETE}></i>
                    </CardButton>
                  </CardWrapper>
                )}

              </Draggable>
            ))}
            {provided.placeholder}
          </ScrollView>
        )}
      </Droppable>
      <CardAdder>
        <CardInput value={text} onChange={onChange} placeholder='Add a card..' rows="1"/>
        <Button onClick={onSubmit}><i className={ADD}></i></Button>
      </CardAdder>
    </ListContainer>
  );

}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  word-wrap: break-word;
  word-break: break-word;
  max-height: 100%;
  overflow-y: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${PALETTE[2]};
  padding: 10px;
  color: ${PALETTE[3]};
  flex-grow: 1;
`;

const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  min-height: 1px;
`;

const CardAdder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  margin: 5px 0 10px 0;
  background-color: ${PALETTE[0]};
  padding: 10px;
  color: white;
`;

const CardInput = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    padding: 5px;
    background: none;
    font-family: 'Open Sans', 'Noto Sans KR';
    &::placeholder{
        color: ${PALETTE[2]};
    }
    outline-color: ${PALETTE[3]};
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
`;

const CardButton = styled(Button)`
  &:hover{
      color: ${PALETTE[0]};
  }
`;

const StyledEditable = styled(ContentEditable)`
  padding: 5px;  
  outline-color: ${PALETTE[3]};  
`;

const ListTitle = styled.h4`
  cursor: pointer;
  width: 100%;
  text-align: left;
  margin: 5px 0;
`;