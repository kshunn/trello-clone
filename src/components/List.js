import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Card from './Card';
import {Button, Input, ADD, DELETE, PALETTE} from '../routes/Home';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import ContentEditable from 'react-contenteditable';
import { BoardListContext } from '../App';

export default function List({boardKey, listKey, listName, cardList}){
    const { dispatch } = React.useContext(BoardListContext);
    const [text, setText] = useState("");
    const [nextListName, setNextListName] = useState(listName);
    const nextListNameRef = useRef();
    const createNewCard = text => {
        dispatch({
            type: "ADD_CARD",
            payload: {
                newCardName: text,
                boardKey: boardKey,
                listKey: listKey,
            }
        });
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
        const askDelete = window.confirm("Do you really want to remove the card?");
        if(askDelete){
            dispatch({
                type: "DELETE_CARD",
                payload: {
                    boardKey: boardKey,
                    listKey: listKey,
                    cardKey: key
                }
            });
        }
    };
    const changeText = e => {
        setNextListName(e.target.value);
    };
    const editListName = () => {
        const nextListName = nextListNameRef.current.innerHTML;
        if(!nextListName){
            setNextListName(listName);
            return;
        }
        else dispatch({
            type: "EDIT_LIST",
            payload: {
                newListName: nextListName,
                boardKey: boardKey,
                listKey: listKey,
            }
        });
    }
    const disableNewLines = e => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
          e.returnValue = false;
          if (e.preventDefault){
              e.preventDefault();
          }
        }
    }
    return (
        <ListContainer>
            <ListTitle>
                <StyledEditable
                    innerRef={nextListNameRef}
                    html={nextListName}
                    disabled={false}
                    onChange={changeText}
                    onBlur={editListName}
                    spellCheck='false'
                    onKeyPress={disableNewLines}
                />
            </ListTitle>
            <Droppable droppableId={listKey} type="card">
                {(provided) => (
                    <ScrollView
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {cardList.map((card, index) => (
                            <Draggable key={card.cardKey} draggableId={card.cardKey} index={index}>
                                {(provided, snapshot) => (
                                    <CardWrapper
                                        key={card.cardKey}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        isDragging={snapshot.isDragging}
                                    >
                                        <Card 
                                            boardKey={boardKey}
                                            listKey={listKey}
                                            {...card}
                                        />
                                        <CardButton onClick={()=>deleteCard(card.cardKey)}>
                                            <i className={DELETE}></i>
                                        </CardButton>
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
    flex-grow: 1;
`;

const ScrollView = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    max-height: 48vh;
    overflow-y: auto;
    min-height: 1px;
`;

const CardAdder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    margin: 5px 0 10px 0;
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

const StyledEditable = styled(ContentEditable)`
    padding: 10px;  
    outline-color: ${PALETTE[3]};  
`;

const ListTitle = styled.h4`
    cursor: pointer;
`;