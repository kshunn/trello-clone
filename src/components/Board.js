import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import {Button, Input, ADD, DELETE, EMPTY} from '../routes/Home';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Board({boardKey, boardName, listList, functionSet}) {
    const [text, setText] = useState("");
    const createNewList = text => {
        functionSet.create(boardKey, EMPTY, text);
    };
    const deleteList = (key) => {
        functionSet.remove(boardKey, key, EMPTY);
    };
    const onChange = e =>{
        setText(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        createNewList(text);
        setText("");
    };
    const onDragEnd = result => {
        const { destination, source, type } = result;
        if(!destination){
            return;
        }
        if(destination.droppableId===source.droppableId && destination.index===source.index){
            return;
        }
        if(type==='card'){
            functionSet.switchIndex(boardKey, source.droppableId, destination.droppableId, source.index, destination.index);
            return;
        }
        else if(type==='list'){
            functionSet.switchIndex(boardKey, EMPTY, EMPTY, source.index, destination.index);
            return;
        }
    };

    return(
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
                                        <ListWrapper
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                        >
                                            <List
                                                boardKey={boardKey} 
                                                listKey={list.listKey} 
                                                listName={list.listName} 
                                                cardList={list.cardList} 
                                                functionSet={functionSet}
                                                provided={provided}
                                            />
                                            <Button onClick={() => deleteList(list.listKey)}><i className={DELETE}></i></Button>
                                        </ListWrapper>
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
                    <ListInput type="text" value={text} onChange={onChange} placeholder='Add a list..'/>
                    <Button onClick={onSubmit}><i className={ADD}></i></Button>
                </ListAdder>
            </div>
        </BoardContainer>
    );

}

const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 10px;
    overflow-x: auto;
    flex-grow: 1;
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
    width: 210px;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    min-width: 210px;
    max-width: 210px;
    flex-grow: 0;
`;

const ListInput = styled(Input)`
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
`;

const ListField = styled.div`
    display: flex;
    align-items: flex-start;
`;