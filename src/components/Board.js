import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import {Button, Input, ADD, DELETE, EMPTY} from '../routes/Home';

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
    return(
        <BoardContainer>
            {listList.map(list => (
                <ListWrapper key={list.listKey}>
                    <List
                        boardKey={boardKey} 
                        listKey={list.listKey} 
                        listName={list.listName} 
                        cardList={list.cardList} 
                        functionSet={functionSet}
                    />
                    <Button onClick={() => deleteList(list.listKey)}><i className={DELETE}></i></Button>
                </ListWrapper>
            ))}
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
`;

const ListInput = styled(Input)`
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
`;