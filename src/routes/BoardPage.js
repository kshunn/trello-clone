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
        <>
            <Link to={{pathname: '/'}}>Home</Link>
            <Board 
                boardKey={location.state.key} 
                boardName={location.state.name} 
                listList={board.listList} 
                create={create} 
                remove={remove}
            />
        </>
    );
}