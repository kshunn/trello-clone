import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Home({boardList}){
    const [text, setText] = useState("");
    const createNewBoard = text => {
        const check = boardList.filter(board => board.boardName === text);
        if(!check.length)  boardList.push({key: text.concat(Date.now()), boardName: text, listList: []});
    };
    const deleteBoard = key => {
        boardList = boardList.filter(board => board.key !== key);
    };
    const onChange = e =>{
        setText(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        createNewBoard(text);
        setText("");
    };
    return(
        <>
            {boardList.map(board => (
                <Link key={board.key} to={{
                    pathname: `/board/${board.boardName}`,
                    state:{
                        key: board.key,
                        name: board.boardName,
                        listList: board.listList
                    }
                }}>
                    <h4>{board.boardName}</h4>
                </Link>
                
            ))}
            <BoardAdder onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button type="submit">AddB</button>
            </BoardAdder>
        </>
    );
}

const BoardAdder = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;