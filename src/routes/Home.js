import React, { useState } from 'react';
import styled, {css} from 'styled-components';
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
        <Container> 
            <BoardsWrapper>
                <Title>Boards</Title> 
                <Boards>  
                {boardList.map(board => (
                    <BoardLink key={board.boardKey}>
                        <ToBoard to={{
                            pathname: `/board/${board.boardName}-board`,
                            state:{
                                key: board.boardKey,
                                name: board.boardName
                            }
                        }}>
                            {board.boardName}
                        </ToBoard>
                        <Button onClick={() => deleteBoard(board.boardKey)}><i className={DELETE}></i></Button>
                    </BoardLink>
                ))}
                <BoardAdder>
                    <BoardInput type="text" value={text} onChange={onChange} placeholder='Add a board..'/>
                    <Button onClick={onSubmit}><i className={ADD}></i></Button>
                </BoardAdder>
                </Boards>   
            </BoardsWrapper>
        </Container>
    );
}

export const Button = styled.button`
    border: none;
    background: none;
    &:hover{
        color: #576574;
    }
    cursor: pointer;    
`;

export const Input = styled.input`
    border: none;
    padding: 5px;
    background: none;
    font-family: 'Montserrat', 'Noto Sans KR';
    &::placeholder{
        color: #576574;
    }
`;

const Title = styled.h2`
    color: white;
`;

const BoardInput = styled(Input)`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    margin: auto 0;
`;

const ToBoard = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover{
        color: #576574;
    }
    margin: auto;
    font-weight: bold;
    word-break: break-all;
    text-align: center;
`;

const BoardAdder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    width: 150px;
    height: 150px;
    background-color: #f1f1f1;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

const BoardLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    width: 150px;
    height: 150px;
    background-color: #f1f1f1;
`;

const Boards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const BoardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    border-radius: 20px;
    background-color: #6a89cc;
`;



