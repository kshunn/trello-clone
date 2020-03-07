import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import {EMPTY} from '../App';

export default function Board({boardKey, boardName, listList, create, remove}) {
    const [text, setText] = useState("");
    const createNewList = text => {
        create(boardKey, EMPTY, text);
    };
    const deleteList = (key) => {
        remove(boardKey, key, EMPTY);
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
            <h4>{boardName}</h4>
            {listList.map(list => (
                <span key={list.listKey}>
                    <List boardKey={boardKey} listKey={list.listKey} listName={list.listName} cardList={list.cardList} create={create} remove={remove} />
                    <button onClick={() => deleteList(list.listKey)}>DelL</button>
                </span>
            ))}
            <ListAdder>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={onSubmit}>AddL</button>
            </ListAdder>
        </BoardContainer>
    );

}

const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

const ListAdder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;