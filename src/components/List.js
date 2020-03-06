import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function List({name}){
    const {name} = this.props;
    const [cardList, setCardList] = useState([]);
    const [cardKey, setCardKey] = useState(0);
    const createNewCard = e => {
        const newCardList = cardList.push({key: cardKey, content: e.target.value});
        setCardList(newCardList);
        setCardKey(cardKey+1);
    };
    const deleteCard = (key) => {
        const newCardList = cardList.filter(card => card.key !== key);
        setCardList(newCardList);
    };
    onChange = e =>{
        setText(e.target.value);
    };
    onSubmit = e => {
        e.preventDefault();
        createNewCard(e);
        setText("");
    };
    return (
        <list>
            <h4>{name}</h4>
            {cardList.map(card => (
                <cardWrapper>
                    <Card key={card.key} content={card.content}/>
                    <button onClick={deleteCard(card.key)}>Del</button>
                </cardWrapper>
            ))}
            <cardAdder onSubmit={onSubmit}>
                <input type="text" onChange={onChange} />
                <button>Add</button>
            </cardAdder>
        </list>
    );

}

const list = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const cardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;

const cardAdder = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;

