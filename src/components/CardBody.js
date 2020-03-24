import React from 'react';
import { BoardListContext } from '../App';
import ContentEditable from 'react-contenteditable';
import styled from 'styled-components';
import { PALETTE } from '../routes/Home';

export default function CardBody({ boardKey, listKey, cardKey }){
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const { done, description } = findElement(boardKey, listKey, cardKey);
  const [status, oppositeStatus] = done ? ['Done', 'undone'] : ['Undone', 'done'];
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
    <BodyWrapper>
      <div>
        <Header>
          Status
        </Header>
        <Toggle
          onClick={() => dispatch({
            type: "TOGGLE_DONE",
            payload: {
              boardKey: boardKey,
              listKey: listKey,
              cardKey: cardKey
            }
          })}
        >
          {oppositeStatus}
        </Toggle>
      </div>
      <Content>
        {status}
      </Content>
      <Header>Description</Header>
      <StyledEditable 
        innerRef={nextDescriptionRef}
        html={nextDescription}
        disabled={false}
        onChange={changeText}
        onBlur={editDescription}
        onKeyPress={disableNewLines}
        spellCheck='false'
      />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  font-weight: bold;
  padding: 5px 0;
  font-size: 20px;
`;

const Content = styled.div`
  padding: 5px 0 20px 0;
  font-size: 16px;
`;

const Toggle = styled.button`
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  background-color: ${PALETTE[2]};
  text-transform: uppercase;
`;

const StyledEditable = styled(ContentEditable)`
  outline-color: ${PALETTE[3]};
  padding: 5px 0;
`;