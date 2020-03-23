import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button, PALETTE } from '../routes/Home';
import { BoardListContext } from '../App';

const CHECK = "fas fa-check";
const DONE = "fas fa-times";

export default function Card({ boardKey, listKey, cardKey }) {
  const location = useLocation();
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const { cardName, done } = findElement(boardKey, listKey, cardKey);
  const ICON = done ? DONE : CHECK;
  return (
    <>
      <Cardtext
        done={done ? 1 : 0}
        to={{
          pathname: `/${cardKey}/${cardName}`,
          state: {
            background: location,
            boardKey: boardKey,
            listKey: listKey,
            cardKey: cardKey,
          }
        }}
      >
        {cardName}
      </Cardtext>
      <CardButton
        done={done}
        onClick={() => dispatch({
          type: "TOGGLE_DONE",
          payload: {
            boardKey: boardKey,
            listKey: listKey,
            cardKey: cardKey
          }
        })}
      >
        <i className={ICON}></i>
      </CardButton>
    </>
  );
}

const Cardtext = styled(Link)`
  width: 100%;
  padding: 5px;
  text-align: left;
  font-size: 14px;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
  color: ${PALETTE[3]};
`;

const CardButton = styled(Button)`
  &:hover{
    color: ${PALETTE[0]};
  }
`;