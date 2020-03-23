import React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '../routes/Home';
import ContentEditable from 'react-contenteditable';
import { BoardListContext } from '../App';


export default function CardPage({ boardList }){
  const { dispatch } = React.useContext(BoardListContext);
  const history = useHistory();
  const location = useLocation();
  const { cardName, boardKey, listKey, cardKey } = location.state;
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
          <ContentEditable 
            innerRef={nextCardNameRef}
            html={nextCardName}
            disabled={false}
            onChange={changeText}
            onBlur={editCardName}
            onKeyPress={disableNewLines}
            spellCheck='false'
          />
          <Button>
            <i className="fas fa-times" onClick={back}/>
          </Button>
        </CardHeader>
      </Modal>
    </Full>
  );
}

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