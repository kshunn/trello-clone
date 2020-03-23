import React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { PALETTE } from '../routes/Home';
import ContentEditable from 'react-contenteditable';
import { BoardListContext } from '../App';
import CardBody from '../components/CardBody';

export default function CardPage(){
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const history = useHistory();
  const location = useLocation();
  const { boardKey, listKey, cardKey } = location.state;
  const { cardName } = findElement(boardKey, listKey, cardKey);
  const [nextCardName, setNextCardName] = React.useState(cardName);
  const nextCardNameRef = React.useRef();
  const back = e => {
    if(e.target!==e.currentTarget) return;
    e.stopPropagation();
    history.goBack();
  }
  const changeText = e => {
    setNextCardName(e.target.value);
  }
  const disableNewLines = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.returnValue = false;
      if (e.preventDefault) {
        e.preventDefault();
      }
    }
  }
  const editCardName = () => {
    const nextCardName = nextCardNameRef.current.innerHTML;
    if(!nextCardName) {
      setNextCardName(cardName);
      return;
    }
    else dispatch({
      type: "EDIT_CARD",
      payload: {
        boardKey: boardKey,
        listKey: listKey,
        cardKey: cardKey,
        newCardName: nextCardName,
      }
    });
  };
  return (
    <Full onClick={back}>
      <Modal>
        <CardHeader>
          <StyledEditable 
            innerRef={nextCardNameRef}
            html={nextCardName}
            disabled={false}
            onChange={changeText}
            onBlur={editCardName}
            onKeyPress={disableNewLines}
            spellCheck='false'
          />
          <Button className="fas fa-times" onClick={back}/>
        </CardHeader>
        <CardBody 
          boardKey={boardKey}
          listKey={listKey}
          cardKey={cardKey}
        />
      </Modal>
    </Full>
  );
}

const Button = styled.i`
  border: none;
  background: none;
  &:hover{
      color: ${PALETTE[2]};
  }
  cursor: pointer;
  color: ${PALETTE[3]};  
  display: flex;
  align-items: center;
  padding: 0 10px; 
`;

const Full = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  position: absolute;
  background: white;
  top: 80px;
  left: 10%;
  right: 10%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledEditable = styled(ContentEditable)`
  padding: 5px;  
  outline-color: ${PALETTE[3]};  
`;