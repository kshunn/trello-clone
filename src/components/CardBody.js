import React from 'react';
import { BoardListContext } from '../App';
import ContentEditable from 'react-contenteditable';

export default function CardBody({ boardKey, listKey, cardKey }){
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const { done, description } = findElement(boardKey, listKey, cardKey);
  const [status, oppositeStatus] = done ? ['done', 'undone'] : ['undone', 'done'];
  const [nextDescription, setNextDescription] = React.useState(description);
  const nextDescriptionRef = React.useRef();
  const disableNewLines = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.returnValue = false;
      if (e.preventDefault) {
        e.preventDefault();
      }
    }
  }
  const changeText = e => {
    setNextDescription(e.target.value);
  }
  const editDescription = () => {
    const nextDescription = nextDescriptionRef.current.innerHTML;
    if(!nextDescription) {
      setNextDescription(description);
      return;
    }
    else dispatch({
      type: "EDIT_DESCRIPTION",
      payload: {
        boardKey: boardKey,
        listKey: listKey,
        cardKey: cardKey,
        newDescription: nextDescription,
      }
    });
  };
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
        Description
        <ContentEditable 
            innerRef={nextDescriptionRef}
            html={nextDescription}
            disabled={false}
            onChange={changeText}
            onBlur={editDescription}
            onKeyPress={disableNewLines}
            spellCheck='false'
          />
      </div>
    </div>
  );
}