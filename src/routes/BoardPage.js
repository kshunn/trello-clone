import React, { useEffect } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';

export default function BoardPage({location, history, boardList, create, remove}){
    if(location.state===undefined){
        history.push("/");
        return null;
    }
    const board = boardList.find(board => board.boardKey===location.state.key);
    return (
        <BoardPageWrapper>
            <Header>
                <BoardTitle>{location.state.name}</BoardTitle>
                <ToHome to={{pathname: '/'}}><i class="fas fa-home"></i></ToHome>
            </Header>
            <Board 
                boardKey={location.state.key} 
                boardName={location.state.name} 
                listList={board.listList} 
                create={create} 
                remove={remove}
            />
        </BoardPageWrapper>
    );
}

const BoardPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
`;

const BoardTitle = styled.h1`
    font-size: 35px;
    margin: auto;
    background: #6a89cc;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const ToHome = styled(Link)`
    font-size: 30px;
    color: #6a89cc;
    &:hover{
        color: #1e3799;
    }
`;

const Header = styled.header`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
`;
