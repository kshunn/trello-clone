import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import {EMPTY} from '../App';
import {Button, Input} from '../routes/Home';

const ADD = "fas fa-plus";
const DELETE = "fas fa-trash";

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
            {listList.map(list => (
                <ListWrapper key={list.listKey}>
                    <List boardKey={boardKey} listKey={list.listKey} listName={list.listName} cardList={list.cardList} create={create} remove={remove} />
                    <Button onClick={() => deleteList(list.listKey)}><i class={DELETE}></i></Button>
                </ListWrapper>
            ))}
            <ListAdder>
                <ListInput type="text" value={text} onChange={onChange} placeholder='Add a list..'/>
                <Button onClick={onSubmit}><i class={ADD}></i></Button>
            </ListAdder>
        </BoardContainer>
    );

}

const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 10px;
`;

const ListAdder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 5px;
    background-color: #f1f1f1;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 10px 10px 5px 10px;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: #f1f1f1;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const ListInput = styled(Input)`
    margin-bottom: 5px;
`;