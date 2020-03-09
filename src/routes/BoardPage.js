import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';
import {Shadow} from '../routes/Home';

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
    flex-direction: column;
    text-align: center;
`;

const BoardTitle = styled.h1`
    font-size: 35px;
    margin: auto;
    background: #6a89cc;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    ${Shadow};
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
    background: rgba(255, 255, 255, 0.5);
`;
