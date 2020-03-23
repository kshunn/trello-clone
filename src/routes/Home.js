import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Help from '../components/Help';
import { BoardListContext } from '../App';

export const ADD = 'fas fa-plus';
export const DELETE = "fas fa-trash";
const PIN = "far fa-star";
const PINNED = "fas fa-star";
export const PALETTE = ['#E9ECE5', '#C0DFD9', '#B3C2BF', '#3B3A36'];

export default function Home() {
  const { dispatch, findElement } = React.useContext(BoardListContext);
  const boardList = findElement();
  const [text, setText] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const createNewBoard = text => {
    dispatch({
      type: "ADD_BOARD",
      payload: {
        newBoardName: text
      }
    });
  };
  const deleteBoard = key => {
    const askDelete = window.confirm("Do you really want to remove the board?");
    if (askDelete) {
      dispatch({
        type: "DELETE_BOARD",
        payload: {
          boardKey: key
        }
      });
    }
  };
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if(text) createNewBoard(text);
    setText("");
  };
  return (
    <Container>
      <BoardsWrapper>
        <Title>Pinned Boards</Title>
        <Boards>
          {boardList.map(board => (
            board.pin ? (
              <BoardLink key={board.boardKey}>
                <ToBoard to={{
                  pathname: `/${board.boardKey}/${board.boardName}`,
                }}>
                  {board.boardName}
                </ToBoard>
                <Button
                  onClick={() => dispatch({
                    type: "TOGGLE_PIN",
                    payload: { boardKey: board.boardKey }
                  })}
                >
                  <i className={board.pin ? PINNED : PIN}></i>
                </Button>
                <Button onClick={() => deleteBoard(board.boardKey)}>
                  <i className={DELETE}></i>
                </Button>
              </BoardLink>
            ) : null
          ))}
        </Boards>
      </BoardsWrapper>
      <BoardsWrapper>
        <Title>Boards</Title>
        <Boards>
          {boardList.map(board => (
            <BoardLink key={board.boardKey}>
              <ToBoard to={{
                pathname: `/${board.boardKey}/${board.boardName}`,
              }}>
                {board.boardName}
              </ToBoard>
              <Button onClick={() => dispatch({
                type: "TOGGLE_PIN",
                payload: { boardKey: board.boardKey }
              })}
              >
                <i className={board.pin ? PINNED : PIN}></i>
              </Button>
              <Button onClick={() => deleteBoard(board.boardKey)}>
                <i className={DELETE}></i>
              </Button>
            </BoardLink>
          ))}
          <BoardAdder>
            <BoardInput type="text" value={text} onChange={onChange} placeholder='Add a board..' />
            <Button onClick={onSubmit}><i className={ADD}></i></Button>
          </BoardAdder>
        </Boards>
      </BoardsWrapper>
      <HelpLink
        onClick={() => setShowHelp(!showHelp)}
      >
        {showHelp ? 'Hide' : 'Tips'}
      </HelpLink>
      <Help show={showHelp} />
    </Container>
  );
}

export const Button = styled.button`
  border: none;
  background: none;
  &:hover{
      color: ${PALETTE[2]};
  }
  cursor: pointer;
  color: ${PALETTE[3]};  
  outline: none;  
`;

export const Input = styled.input`
  border: none;
  padding: 5px;
  background: none;
  font-family: 'Open Sans', 'Noto Sans KR';
  &::placeholder{
      color: ${PALETTE[2]};
  }
  outline-color: ${PALETTE[3]};
`;

const Title = styled.h2`
  color: ${PALETTE[3]};
`;

const BoardInput = styled(Input)`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  margin: auto 0;
`;

const ToBoard = styled(Link)`
  color: ${PALETTE[3]};
  text-decoration: none;
  &:hover{
      color: ${PALETTE[2]};
  }
  margin: auto;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-word;
  text-align: center;
`;

const BoardAdder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  width: 200px;
  height: 80px;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const BoardLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  width: 200px;
  height: 80px;
  background-color: white;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const BoardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border-radius: 20px;
  background-color: ${PALETTE[1]};
  margin: 10px 0;
`;

const HelpLink = styled.a`
  padding-top: 20px;
  font-size: 14px;
  color: ${PALETTE[3]};
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
`;



