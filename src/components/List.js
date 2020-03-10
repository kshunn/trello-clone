import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import {Button, Input, ADD, DELETE, PALETTE} from '../routes/Home';
import {Droppable, Draggable} from 'react-beautiful-dnd';

export default function List({boardKey, listKey, listName, cardList, functionSet}){
    const [text, setText] = useState("");
    const createNewCard = text => {
        functionSet.create(boardKey, listKey, text);
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
        functionSet.remove(boardKey, listKey, key);
    };
    return (
        <ListContainer>
            <h4>{listName}</h4>
            <Droppable droppableId={listKey}>
                {(provided) => (
                    <ScrollView
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {cardList.map((card, index) => (
                            <Draggable key={card.cardKey} draggableId={card.cardKey} index={index}>
                                {(provided) => (
                                    <CardWrapper
                                        key={card.cardKey}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <Card 
                                            boardKey={boardKey}
                                            listKey={listKey}
                                            cardKey={card.cardKey}
                                            content={card.content}
                                            done={card.done}
                                            functionSet={functionSet}
                                        />
                                        <CardButton onClick={()=>deleteCard(card.cardKey)}><i className={DELETE}></i></CardButton>
                                    </CardWrapper>
                                )}

                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ScrollView>
                )}
            </Droppable>
            <CardAdder>
                <CardInput type="text" value={text} onChange={onChange} placeholder='Add a card..' />
                <Button onClick={onSubmit}><i className={ADD}></i></Button>
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
    word-wrap: break-word;
    word-break: break-word;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 5px 0;
    border-radius: 5px;
    background-color: ${PALETTE[2]};
    padding: 10px;
    color: ${PALETTE[3]};
`;

const ScrollView = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    max-height: 48vh;
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
    background-color: ${PALETTE[0]};
    padding: 10px;
    color: white;
`;

const CardInput = styled(Input)`
    width: 100%;
`;

const CardButton = styled(Button)`
    &:hover{
        color: ${PALETTE[0]};
    }
`;