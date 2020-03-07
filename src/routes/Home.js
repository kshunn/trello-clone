import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {EMPTY} from '../App';

export default function Home({boardList, create, remove}){
    const [text, setText] = useState("");
    const createNewBoard = text => {
        create(EMPTY, EMPTY, text);
    };
    const deleteBoard = key => {
        remove(key, EMPTY, EMPTY);
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
                <span key={board.boardKey}>
                    <Link to={{
                        pathname: `/board/${board.boardName}`,
                        state:{
                            key: board.boardKey,
                            name: board.boardName,
                            listList: board.listList,
                        }
                    }}>
                        <h4>{board.boardName}</h4>
                    </Link>
                    <button onClick={() => deleteBoard(board.boardKey)}>DelB</button>
                </span>
                
            ))}
            <BoardAdder>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={onSubmit}>AddB</button>
            </BoardAdder>
        </>
    );
}

const BoardAdder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;