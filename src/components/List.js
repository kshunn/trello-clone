import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import {Button, Input, Shadow} from '../routes/Home';

const ADD = "fas fa-plus";
const DELETE = "fas fa-trash";

export default function List({boardKey, listKey, listName, cardList, create, remove}){
    const [text, setText] = useState("");
    const createNewCard = text => {
        create(boardKey, listKey, text);
    };
    const onChange = e =>{
        setText(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        createNewCard(text);
        setText("");
    };
    const deleteCard = (key) => {
        remove(boardKey, listKey, key);
    };
    return (
        <ListContainer>
            <ListTitle>{listName}</ListTitle>
            {cardList.map(card => (
                <CardWrapper key={card.cardKey}>
                    <Card key={card.cardKey} content={card.content}/>
                    <Button onClick={()=>deleteCard(card.cardKey)}><i class={DELETE}></i></Button>
                </CardWrapper>
            ))}
            <CardAdder>
                <CardInput type="text" value={text} onChange={onChange} placeholder='Add a card..' />
                <Button onClick={onSubmit}><i class={ADD}></i></Button>
            </CardAdder>
        </ListContainer>
    );

}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    width: 200px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 5px 0;
    border-radius: 5px;
    ${Shadow};
    background-color: #6dabe4;
    padding: 10px;

`;

const CardAdder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    margin: 5px 0;
    ${Shadow};
    background-color: #6dabe4;
    padding: 10px;
`;

const CardInput = styled(Input)`
    width: 100%;
`;

const ListTitle = styled.h4`
    text-transform: uppercase;
`;