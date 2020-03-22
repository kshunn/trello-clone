import React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

export default function CardPage({ boardList }){
  const history = useHistory();
  const location = useLocation();
  const { cardName } = location.state;
  const back = event => {
    event.stopPropagation();
    history.goBack();
  }
  return (
    <Full onClick={back}>
      <Modal>
        {cardName}
        <button onClick={back}>Back</button>
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
  top: 25px;
  left: 10%;
  right: 10%;
  padding: 15px;
  border: 1px solid black;
`;