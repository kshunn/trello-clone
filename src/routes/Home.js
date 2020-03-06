import React, { useState } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';

export default function Home(){
    const [boardList, setBoardList] = useState([]);
    const [boardKey, setBoardKey] = useState(0);
    const [text, setText] = useState("");
    const createNewBoard = text => {
        boardList.push({key: boardKey, boardName: text});
        setBoardList(boardList);
        setBoardKey(boardKey+1);
    };
    const deleteBoard = key => {
        const newBoardList = boardList.filter(board => board.key !== key);
        setBoardList(newBoardList);
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
                // <Board key={board.key} boardName={board.boardName} />
                <h4>{board.boardName}</h4>
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