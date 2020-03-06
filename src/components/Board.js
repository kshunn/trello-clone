import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';

export default function Board({name}) {
    const {name} = this.props;
    const [listList, setListList] = useState([]);
    const [listKey, setListKey] = useState(0);
    const createNewList = e => {
        const newListList = listList.push({key: listKey, name: e.target.value});
        setListList(newListList);
        setListKey(listKey+1);
    };
    const deleteList = key => {
        const newListList = listList.filter(list => list.key !== key);
        setList(newListList);
    };
    onChange = e =>{
        setText(e.target.value);
    };
    onSubmit = e => {
        e.preventDefault();
        createNewList(e);
        setText("");
    };
    return(
        <board>
            <h4>{name}</h4>
            {listList.map(list =>(
                <List key={listKey} name={list.name} />
            ))}
            <listAdder onSubmit={onSubmit}>
                <input type="text" onChange={onChange} />
                <button>Add</button>
            </listAdder>
        </board>
    );

}

const board = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

const listAdder = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;