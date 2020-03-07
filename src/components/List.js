import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

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
            <h4>{listName}</h4>
            {cardList.map(card => (
                <CardWrapper key={card.cardKey}>
                    <Card key={card.cardKey} content={card.content}/>
                    <button onClick={()=>deleteCard(card.cardKey)}>Del</button>
                </CardWrapper>
            ))}
            <CardAdder>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={onSubmit}>AddC</button>
            </CardAdder>
        </ListContainer>
    );

}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;

const CardAdder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;

