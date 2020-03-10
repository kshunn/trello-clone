import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';

export default function BoardPage({location, history, boardList, create, remove, toggleDone}){
    if(location.state===undefined){
        history.push("/");
        return null;
    }
    const board = boardList.find(board => board.boardKey===location.state.key);
    return (
        <BoardPageWrapper>
            <Header>
                <BoardTitle>{location.state.name}</BoardTitle>
                <ToHome to={{pathname: '/'}}><i className="fas fa-home"></i></ToHome>
            </Header>
            <Board 
                boardKey={location.state.key} 
                boardName={location.state.name} 
                listList={board.listList} 
                create={create} 
                remove={remove}
                toggleDone={toggleDone}
            />
        </BoardPageWrapper>
    );
}

const BoardPageWrapper = styled.div`
    display: flex;
    flex-flow: column;
    text-align: center;
    min-height: 100vh;
`;

const BoardTitle = styled.h1`
    font-size: 30px;
    margin: auto;
    padding: 10px 20px;
    color: #3b3a36;
`;

const ToHome = styled(Link)`
    font-size: 30px;
    color: #3b3a36;
    &:hover{
        color: #b3c2bf;
    }
`;

const Header = styled.header`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: #c0dfd9;
`;
