import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import { Button, Input, ADD, DELETE } from '../routes/Home';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { BoardListContext } from '../App';

export default function Board({ boardKey }) {
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const { listList } = findElement(boardKey);
  const [text, setText] = useState("");
  const createNewList = text => {
    dispatch({
      type: "ADD_LIST",
      payload: {
        newListName: text,
        boardKey: boardKey
      }
    });
  };
  const deleteList = (key) => {
    const askDelete = window.confirm("Do you really want to remove the list?");
    if (askDelete) {
      dispatch({
        type: "DELETE_LIST",
        payload: {
          boardKey: boardKey,
          listKey: key
        }
      });
    }
  };
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if(text) createNewList(text);
    setText("");
  };
  const onDragEnd = result => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (type === 'card') {
      dispatch({
        type: "SWITCH_CARD",
        payload: {
          boardKey: boardKey,
          startListKey: source.droppableId,
          endListKey: destination.droppableId,
          startIndex: source.index,
          endIndex: destination.index
        }
      });
      return;
    }
    else if (type === 'list') {
      dispatch({
        type: "SWITCH_LIST",
        payload: {
          boardKey: boardKey,
          startIndex: source.index,
          endIndex: destination.index
        }
      });
      return;
    }
  };

  return (
    <BoardContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="lists" direction="horizontal" type="list">
          {(provided) => (
            <ListField
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listList.map((list, index) => (
                <Draggable key={list.listKey} draggableId={list.listKey} index={index}>
                  {(provided) => (
                    <Wrapper>
                      <ListWrapper
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                      >
                        <List
                          boardKey={boardKey}
                          listKey={list.listKey}
                        />
                        <Button onClick={() => deleteList(list.listKey)}>
                          <i className={DELETE}></i>
                        </Button>
                      </ListWrapper>
                    </Wrapper>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ListField>
          )}
        </Droppable>
      </DragDropContext>
      <div>
        <ListAdder>
          <ListInput type="text" value={text} onChange={onChange} placeholder='Add a list..' />
          <Button onClick={onSubmit}><i className={ADD}></i></Button>
        </ListAdder>
      </div>
    </BoardContainer>
  );

}

const Wrapper = styled.div`
  height: 100%;
  padding-bottom: 10px;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 10px;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100%;
`;

const ListAdder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 10px;
  border-radius: 10px;
  background-color: white;
  padding: 10px 10px 5px 10px;
  width: 230px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  min-width: 230px;
  max-width: 230px;
  max-height: 100%;
`;

const ListInput = styled(Input)`
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
`;

const ListField = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`;