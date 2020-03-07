import React, { useEffect } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';

export default function BoardPage({location, history, create, remove}){
    useEffect(() => {
        if(location.state===undefined){
            history.push("/");
        }
    }, );
    return (
        <>
            <Link to={{pathname: '/'}}>Home</Link>
            <Board 
                boardKey={location.state.key} 
                boardName={location.state.name} 
                listList={location.state.listList} 
                create={create} 
                remove={remove}
            />
        </>
    );
}