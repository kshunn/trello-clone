import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import {Button, Input, Shadow} from '../routes/Home';

const ADD = "fas fa-plus";
const DELETE = "fas fa-trash";

export default function List({boardKey, listKey, listName, cardList, create, remove, toggleDone}){
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
            <ScrollView>
            {cardList.map(card => (
                <CardWrapper key={card.cardKey}>
                    <Card 
                        boardKey={boardKey}
                        listKey={listKey}
                        cardKey={card.cardKey}
                        content={card.content}
                        done={card.done}
                        toggleDone={toggleDone}
                    />
                    <WhiteButton onClick={()=>deleteCard(card.cardKey)}><i className={DELETE}></i></WhiteButton>
                </CardWrapper>
            ))}
            </ScrollView>
            <CardAdder>
                <CardInput type="text" value={text} onChange={onChange} placeholder='Add a card..' />
                <WhiteButton onClick={onSubmit}><i className={ADD}></i></WhiteButton>
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
    word-break: break-all;
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
    background-color: #6a89cc;
    padding: 10px;
    color: white;
`;

const ScrollView = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    max-height: 270px;
    overflow-y: auto;
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
    background-color: #6a89cc;
    padding: 10px;
    color: white;
`;

const CardInput = styled(Input)`
    width: 100%;
    color: white;
    &::placeholder{
        color: #dcdde1;
    }
`;

const ListTitle = styled.h4`
    text-transform: uppercase;
`;

export const WhiteButton = styled(Button)`
    color: white;
    &:hover{
        color: #dcdde1;
    }
`;