import React from 'react';
import { BoardListContext } from '../App';

export default function CardBody({ boardKey, listKey, cardKey }){
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const { done, description } = findElement(boardKey, listKey, cardKey);
  const [status, oppositeStatus] = done ? ['done', 'undone'] : ['undone', 'done'];
  return (
    <div>
      <div>
        Status: {status}
        <button
          onClick={() => dispatch({
            type: "TOGGLE_DONE",
            payload: {
              boardKey: boardKey,
              listKey: listKey,
              cardKey: cardKey
            }
          })}
        >
          Mark it as {oppositeStatus}
        </button>
      </div>
      <div>
        Description: {description}
      </div>
    </div>
  );
}