import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';

export default function Board({boardName, listList}) {
    const [text, setText] = useState("");
    const createNewList = text => {
        listList.push({key: text.concat(Date.now()), listName: text, cardList: []});
    };
    const deleteList = key => {
        listList = listList.filter(list => list.key !== key);
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
            {listList.map(list =>(
                <List key={list.key} listName={list.listName} cardList={list.cardList} />
            ))}
            <ListAdder onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>AddL</button>
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

const ListAdder = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;