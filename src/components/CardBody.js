import React from 'react';
import { BoardListContext } from '../App';

export default function CardBody({ boardKey, listKey, cardKey }){
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const { done, description } = findElement(boardKey, listKey, cardKey);
  return null;
}