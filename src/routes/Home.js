import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ADD = 'fas fa-plus';
export const DELETE = "fas fa-trash";
const PIN = "fas fa-thumbtack";
export const PALETTE = ['#E9ECE5', '#C0DFD9', '#B3C2BF', '#3B3A36'];
export const EMPTY =  '---';

export default function Home({boardList, functionSet}){
    const [text, setText] = useState("");
    const createNewBoard = text => {
        functionSet.create(EMPTY, EMPTY, text);
    };
    const deleteBoard = key => {
        functionSet.remove(key, EMPTY, EMPTY);
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
                <Title>Pinned Boards</Title> 
                <Boards>  
                {boardList.map(board => (
                    board.pin ? (
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
                            <Button onClick={() => functionSet.togglePin(board.boardKey)}><i className={PIN}></i></Button>
                            <Button onClick={() => deleteBoard(board.boardKey)}><i className={DELETE}></i></Button>
                        </BoardLink>
                    ) : null
                ))}
                </Boards>   
            </BoardsWrapper> 
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
                        <Button onClick={() => functionSet.togglePin(board.boardKey)}><i className={PIN}></i></Button>
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
        color: ${PALETTE[2]};
    }
    cursor: pointer;
    color: ${PALETTE[3]};    
`;

export const Input = styled.input`
    border: none;
    padding: 5px;
    background: none;
    font-family: 'Lora', 'Noto Serif KR';
    &::placeholder{
        color: ${PALETTE[2]};
    }
    outline-color: ${PALETTE[3]};
`;

const Title = styled.h2`
    color: ${PALETTE[3]};
`;

const BoardInput = styled(Input)`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    margin: auto 0;
`;

const ToBoard = styled(Link)`
    color: ${PALETTE[3]};
    text-decoration: none;
    &:hover{
        color: ${PALETTE[2]};
    }
    margin: auto;
    font-weight: bold;
    word-wrap: break-word;
    word-break: break-word;
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
    width: 200px;
    height: 80px;
    background-color: white;
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
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    width: 200px;
    height: 80px;
    background-color: white;
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
    background-color: ${PALETTE[1]};
    margin: 10px 0;
`;


