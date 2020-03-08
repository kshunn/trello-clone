import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {EMPTY} from '../App';

const ADD = "fas fa-plus";
const DELETE = "fas fa-trash";

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
            <BoardWrapper>    
                {boardList.map(board => (
                    <BoardLink key={board.boardKey}>
                        <Link to={{
                            pathname: `/board/${board.boardName}`,
                            state:{
                                key: board.boardKey,
                                name: board.boardName
                            }
                        }}>
                            <h4>{board.boardName}</h4>
                        </Link>
                        <Button onClick={() => deleteBoard(board.boardKey)}><i class={DELETE}></i></Button>
                    </BoardLink>
                    
                ))}
            </BoardWrapper>
            <BoardAdder>
                <Input type="text" value={text} onChange={onChange} placeholder='Add a board..'/>
                <Button onClick={onSubmit}><i class={ADD}></i></Button>
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

const BoardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const BoardLink = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 1px solid gray;
`;

export const Button = styled.button`
    border: none;
    background: none;
    &:hover{
        color: #576574;
    }    
`;

export const Input = styled.input`
    border: none;
    padding: 5px;
    background: none;
    font-family: 'Montserrat';
    &::placeholder{
        color: #576574;
    }
`;
