import React, { useState } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';

export default function Home({boardList}){
    const [boardKey, setBoardKey] = useState(0);
    const [text, setText] = useState("");
    const createNewBoard = text => {
        boardList.push({key: boardKey, boardName: text, listList: []});
        setBoardKey(boardKey+1);
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
                <Link to={{
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