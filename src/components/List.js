import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function List({listName, cardList}){
    const [text, setText] = useState("");
    const createNewCard = text => {
        cardList.push({key: text.concat(Date.now()), content: text});
    };
    const deleteCard = (key) => {
        cardList = cardList.filter(card => card.key !== key);
    };
    const onChange = e =>{
        setText(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        createNewCard(text);
        setText("");
    };
    return (
        <ListContainer>
            <h4>{listName}</h4>
            {cardList.map(card => (
                <CardWrapper key={card.key}>
                    <Card key={card.key} content={card.content}/>
                    <button onClick={deleteCard(card.key)}>Del</button>
                </CardWrapper>
            ))}
            <CardAdder onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>AddC</button>
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

const CardAdder = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;

