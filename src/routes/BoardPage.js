import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';

const PALETTE = ['#E9ECE5', '#C0DFD9', '#B3C2BF', '#3B3A36'];

export default function BoardPage({location, history, boardList, functionSet}){
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
                functionSet={functionSet}
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
    color: ${PALETTE[3]};
`;

const ToHome = styled(Link)`
    font-size: 30px;
    color: ${PALETTE[3]};
    &:hover{
        color: ${PALETTE[2]};
    }
`;

const Header = styled.header`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: ${PALETTE[1]};
`;
