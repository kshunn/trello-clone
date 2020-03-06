import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import {Link} from 'react-router-dom';

export default function BoardPage({location}){
    return (
        <>
            <Link to={{pathname: '/'}}>Home</Link>
            <Board key={location.state.key} boardName={location.state.name} listList={location.state.listList}/>
        </>
    );
}