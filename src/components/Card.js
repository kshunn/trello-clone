import React from 'react';
import styled from 'styled-components';
import {Button, PALETTE} from '../routes/Home';

const CHECK = "fas fa-check";
const DONE = "fas fa-times";

export default function Card({ boardKey, listKey, cardKey, content, done, toggleDone }){
    const ICON = done ? DONE : CHECK;
    return (
        <>
            <Cardtext done={done}>{content}</Cardtext>
            <CardButton done={done} onClick={()=>toggleDone(boardKey, listKey, cardKey)}><i className={ICON}></i></CardButton>
        </>
    );
}

const Cardtext = styled.div`
    width: 100%;
    padding: 5px;
    text-align: left;
    font-size: 14px;
    text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

const CardButton = styled(Button)`
    &:hover{
        color: ${PALETTE[0]};
    }
`;